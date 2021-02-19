import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 26" {...props}>
      <g id="Grupo_15152" data-name="Grupo 15152" transform="translate(-3741.686 -594.747)">
        <g id="Grupo_15151" data-name="Grupo 15151" transform="translate(3752.794 595)">
          <path id="Trazado_40949" data-name="Trazado 40949" d="M882.935,306.219l-7.889-7.928a2.155,2.155,0,0,0-1.492-.659H870.3a2.216,2.216,0,0,0-.62-1.452l-8.2-8.182a2.836,2.836,0,0,0-1.769-.817.868.868,0,0,0-.109,0c-.048,0-.1,0-.148,0h-3.226c-.05,0-.1,0-.148,0a.821.821,0,0,0-.107.008,2.847,2.847,0,0,0-1.772.826l-7.669,7.7c-.018.018-.039.093-.054.093h7.484l5.493-5.527a.439.439,0,0,1,.622-.017l7.457,7.451-7.457,7.453a.439.439,0,0,1-.622-.008l-5.486-5.491h-7.485c.014,0,.032.04.048.058L854.2,307.4a.007.007,0,0,0,0,.006,2.854,2.854,0,0,0,2.024.837c-.05,0-.1,0-.145,0a.857.857,0,0,0-.109.007,2.851,2.851,0,0,0-1.772.829l-7.669,7.617c-.018.018-.034.008-.052.008h7.487l5.49-5.439a.437.437,0,0,1,.62.025l7.46,7.472-7.46,7.464a.437.437,0,0,1-.62.029l-5.49-5.461h-7.489a.088.088,0,0,1,.054.033l7.669,7.653,0-.059a2.793,2.793,0,0,0,2.024.777h3.228a2.835,2.835,0,0,0,2.026-.786l8.2-8.188a1.881,1.881,0,0,0,.62-1.475h3.258a2.1,2.1,0,0,0,1.492-.608l7.889-7.88a2.866,2.866,0,0,0,0-4.051m-1.922,2.34-7.149,7.148a.44.44,0,0,1-.62,0l-7.151-7.148a.443.443,0,0,1,0-.622l7.151-7.148a.44.44,0,0,1,.62,0l7.149,7.148a.443.443,0,0,1,0,.622" transform="translate(-755.32 -287.18)" fill="#0097da" />
          <path id="Trazado_40950" data-name="Trazado 40950" d="M445.781,345.22a2.111,2.111,0,0,1-.59-1.579v-13.7h7.541a7.1,7.1,0,0,1,3.191.647,5.045,5.045,0,0,1,2.135,1.913,5.375,5.375,0,0,1,.761,2.867v4.452a5.38,5.38,0,0,1-6,6.021h-5.474a2.166,2.166,0,0,1-1.567-.625m6.951-2.328a2.72,2.72,0,0,0,2.18-.784,3.451,3.451,0,0,0,.727-2.42v-4.18a2.666,2.666,0,0,0-.818-2.066,3.038,3.038,0,0,0-2.181-.772h-4.27v10.222Z" transform="translate(-445.191 -320.231)" fill="#004283" />
          <path id="Trazado_40951" data-name="Trazado 40951" d="M524.777,355.759v-2.319a4.27,4.27,0,0,0-1.345-3.27,5,5,0,0,0-3.526-1.226h-1.817a5.466,5.466,0,0,0-2.533.567,4.249,4.249,0,0,0-1.733,1.589,4.511,4.511,0,0,0-.632,2.362v2.93a4.048,4.048,0,0,0,.632,2.215,3.984,3.984,0,0,0,1.724,1.443,5.761,5.761,0,0,0,2.542.478h1.726a6.808,6.808,0,0,0,1.963-.212,1.957,1.957,0,0,0,.927-.592l1.483-1.69-6.1.009a.277.277,0,0,1-.043,0,1.7,1.7,0,0,1-1.224-.451,1.562,1.562,0,0,1-.45-1.2v-.634Zm-8.4-2.044v-.161a2.222,2.222,0,0,1,.45-1.521,1.592,1.592,0,0,1,1.268-.59h1.84a1.559,1.559,0,0,1,1.231.556,2.092,2.092,0,0,1,.436,1.441v.275Z" transform="translate(-497.745 -334.915)" fill="#004283" />
          <path id="Trazado_40952" data-name="Trazado 40952" d="M569.846,355.545l-4.157-5.6h3.453l2.5,3.362,2.5-3.362h3.453l-4.157,5.6,4.293,5.758h-3.453l-2.635-3.544-2.635,3.544h-3.453Z" transform="translate(-538.212 -335.688)" fill="#0097da" />
          <rect id="Rectángulo_931" data-name="Rectángulo 931" width="3.18" height="11.358" transform="translate(41.115 14.257)" fill="#004283" />
          <path id="Trazado_40953" data-name="Trazado 40953" d="M652.192,349.945h2.953v1.407a2.718,2.718,0,0,1,1.226-1.033,3.52,3.52,0,0,1,1.681-.374h1.636v2.5h-1.636a2.691,2.691,0,0,0-1.942.772,2.575,2.575,0,0,0-.738,1.907v6.18h-3.18Z" transform="translate(-605.171 -335.688)" fill="#004283" />
          <path id="Trazado_40954" data-name="Trazado 40954" d="M717.329,360.144a4.479,4.479,0,0,1-1.137-3.135v-7.063h3.18v7.108a1.981,1.981,0,0,0,.376,1.25,1.241,1.241,0,0,0,.99.5h1.317a2.009,2.009,0,0,0,1.407-.659,4.3,4.3,0,0,0,.907-1.682v-6.518h2.953V361.3H724.6V359.78a5.861,5.861,0,0,1-1.327,1.125,2.913,2.913,0,0,1-1.509.4h-1.5a3.747,3.747,0,0,1-2.932-1.159" transform="translate(-654.634 -335.689)" fill="#004283" />
          <path id="Trazado_40955" data-name="Trazado 40955" d="M775.511,359.485a3.586,3.586,0,0,1-1.249-2.817h3.044a1.2,1.2,0,0,0,.421.988,1.593,1.593,0,0,0,1.1.375h2.044c.909,0,1.324-.229,1.324-.728v-.386a.528.528,0,0,0-.208-.421,1.236,1.236,0,0,0-.6-.261l-3.925-.681a4.042,4.042,0,0,1-2.186-.988,2.37,2.37,0,0,1-.8-1.783v-.749a2.6,2.6,0,0,1,1.189-2.271,5.815,5.815,0,0,1,3.325-.817h1.772a4.532,4.532,0,0,1,3.078.988,3.268,3.268,0,0,1,1.17,2.646h-3.044a1.242,1.242,0,0,0-.329-.818,1.275,1.275,0,0,0-.874-.318h-1.726c-.985,0-1.379.317-1.379.771v.363a.5.5,0,0,0,.144.42,1.053,1.053,0,0,0,.532.238l4.122.75a4.076,4.076,0,0,1,2.109.965,2.256,2.256,0,0,1,.815,1.67v.818a2.653,2.653,0,0,1-1.241,2.284,5.567,5.567,0,0,1-3.263.807h-2.044a4.842,4.842,0,0,1-3.316-1.045" transform="translate(-699.513 -334.915)" fill="#004283" />
          <path id="Trazado_40956" data-name="Trazado 40956" d="M625.3,328.849l-1.821-1.821a.361.361,0,0,1,0-.511L625.3,324.7a.362.362,0,0,1,.511,0l1.821,1.821a.362.362,0,0,1,0,.511l-1.821,1.821a.361.361,0,0,1-.511,0" transform="translate(-582.896 -316.093)" fill="#0097da" />
          <rect id="Rectángulo_932" data-name="Rectángulo 932" width="3.18" height="11.358" transform="translate(55.88 14.257)" fill="#004283" />
          <path id="Trazado_40957" data-name="Trazado 40957" d="M690.655,328.849l-1.821-1.821a.361.361,0,0,1,0-.511l1.821-1.821a.362.362,0,0,1,.511,0l1.821,1.821a.362.362,0,0,1,0,.511l-1.821,1.821a.361.361,0,0,1-.511,0" transform="translate(-633.408 -316.093)" fill="#004283" />
        </g>
        <rect id="Rectángulo_1114" data-name="Rectángulo 1114" width="147" height="42" transform="translate(3741.686 594.747)" fill="none" />
      </g>
    </Svg>
  );
};

export default Logo;
