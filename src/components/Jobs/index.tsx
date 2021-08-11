import { useContext, useEffect, useState } from "react";

import Card from './Card';
import NoContent from "../../Assets/noContent";

import { PageContext } from '../../context/index';
import { setJobsdata } from '../../context/actions';

import Api from '../../Api';

import { CONSTANTS } from '../../utils/constants';
import logo from '../../Assets/logo-loader.png';

import './lib/styles.scss';

const Jobs = () => {
  const { dispatch, state: { showJobs, jobs, isMobile } } = useContext(PageContext);
  const [noContent, setNoContet] = useState(false);

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      if (!jobs.length) {
        setNoContet(true);
      }
    }, 5000);

    return (() => clearTimeout(myTimeout))
  }, [jobs]);

  const handleRetry = async () => {
    setNoContet(false);
    setJobsdata(dispatch, []);
    const jobs = await Api.list();
    setJobsdata(dispatch, jobs);
  };

  const renderNoContent = () => (
    <div className="fs__jobs-no-content">
      <div className="fs__jobs-no-content-info">Oops, algo salió mal.</div>
      <div className="fs__jobs-no-content-contact">Si el problema persiste, <a href={`mailto:${CONSTANTS.EMAIL}`}>avisanos</a>.</div>
      <NoContent height={isMobile ? "180" : "220"} width={isMobile ? "300" : "600"}/>
      <div className="fs__jobs-no-content-cta" onClick={handleRetry}>Volver a intentar.</div>
    </div>
  );

  const renderLoading = () => (
    <div className="fs__jobs-loader">
      <img className="fs__jobs-loader-logo" src={logo}/>
    </div>
  );

  const renderFetching = () => (
    <>
      {noContent ? renderNoContent() : renderLoading()}
    </>
  );

  return (
    showJobs ? (
      <div className="fs__jobs">
        {/*<div className="fs__tabs">
          <Tab label="Trabajos" />
        </div>*/}
        {jobs?.map((job: any) => job.id && <Card key={job.id} job={job} isMobile={isMobile} />)}
        {!jobs.length ? renderFetching() : null}
        <div className="fs__jobs-footer">
          Si tu empresa busca desarrolladores Junior/Trainee, si sabes de alguna otra busqueda abierta de este estilo, si estas buscando algun puesto y queres dejar tu perfil para que
          se puedan contactar con vos o si simplemente tenes alguna sugerencia, no dudes en contactarme a <a href={`mailto:${CONSTANTS.EMAIL}`}><strong>{CONSTANTS.EMAIL}</strong></a>
        </div>
      </div>
    ) : null
  )
};

export default Jobs;
