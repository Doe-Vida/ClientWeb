export interface Environment{
  production: boolean,
  apiUrl: string,
}

const _environment = {
  production: false,
  apiUrl: 'https://doevida.onrender.com/',
};

export const _enviromentIBGE = {
  production: true,
  apiUrl: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
}

export let environment: Environment;

export const updateEnvironment = (obj: any) => {
  environment = obj;
}

updateEnvironment(_environment);
