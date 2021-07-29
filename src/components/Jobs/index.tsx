import { useContext } from "react";

import Card from './Card';

import { PageContext } from '../../context/index';

import './lib/styles.scss';

const Jobs = () => {
  const { state: { showJobs, jobs, isMobile } } = useContext(PageContext);

  return (
    showJobs ? (
      <div className="fs__jobs">
        {/*<div className="fs__tabs">
          <Tab label="Trabajos" />
        </div>*/}
        {jobs.map((job: any) => <Card key={job.id} job={job} isMobile={isMobile} />)}
        <div className="fs__jobs-footer">
          Si tu empresa busca desarrolladores Junior o Trainee, si sabes de alguna otra busqueda abierta que este abierta, si estas buscando algun puesto y queres dejar tu perfil para que 
          se puedan contactar con vos o si simplemente tenes alguna sugerencia, no dudes en contactarme a <a><strong>mail@mail.com</strong></a>
        </div>
      </div>
    ) : null
  )
};

export default Jobs;
