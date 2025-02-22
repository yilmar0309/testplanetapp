import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const AgricultureIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 48 48">
      <G fill={color}>
        <Path
          fillRule="evenodd"
          d="m41.94 7.457l-.987-.157l-.259-.966l1.489-.4l-.242 1.523Zm-13.22 13.83l-.851.524l-.002-.002l-.003-.005l-.01-.016l-.034-.057c-.028-.048-.07-.118-.12-.207a20.448 20.448 0 0 1-.405-.743a20.251 20.251 0 0 1-1.074-2.435c-.338-.944-.628-2.025-.673-3.071c-.044-1.042.15-2.173.926-3.06c.697-.796 2.011-1.529 3.392-2.163c1.431-.659 3.115-1.291 4.71-1.838A103.765 103.765 0 0 1 40.56 6.37l.1-.028l.035-.01l.26.967l.987.157l-.006.037l-.017.106a118.244 118.244 0 0 1-.314 1.838a141.777 141.777 0 0 1-.872 4.5c-.356 1.681-.77 3.443-1.209 4.918a20.53 20.53 0 0 1-.687 1.99c-.228.55-.498 1.084-.826 1.46c-.702.802-1.795 1.053-2.75 1.117c-.996.067-2.1-.054-3.093-.23a27.077 27.077 0 0 1-2.628-.61a28 28 0 0 1-1.056-.32l-.063-.022l-.017-.006l-.005-.001h-.002l.324-.947Zm0 0l-.851.524l.188.305l.34.117l.323-.946Zm.672-.833a26.512 26.512 0 0 0 3.121.77c.924.163 1.848.255 2.614.203c.809-.054 1.215-.252 1.378-.438c.104-.12.274-.404.484-.91a18.52 18.52 0 0 0 .617-1.793c.417-1.4.818-3.103 1.17-4.762a139.173 139.173 0 0 0 .928-4.832l-.309.09c-1.109.327-2.607.788-4.17 1.324c-1.566.537-3.179 1.144-4.524 1.763c-1.396.642-2.338 1.225-2.722 1.664c-.307.35-.465.889-.432 1.656c.032.763.251 1.63.557 2.481a18.22 18.22 0 0 0 1.288 2.784ZM10.263 9.974l-.259.966l-.988.157l-.242-1.522l1.49.4Zm9.682 12.333l.851.523l.002-.002l.002-.004l.008-.013l.029-.048a17.101 17.101 0 0 0 .432-.782c.264-.508.601-1.217.883-2.001c.278-.776.52-1.675.557-2.551c.038-.873-.124-1.847-.798-2.617c-.596-.682-1.699-1.29-2.819-1.806c-1.171-.539-2.546-1.055-3.845-1.5a84.64 84.64 0 0 0-4.873-1.502l-.082-.022l-.029-.008l-.259.966l-.988.157l.005.03l.014.087l.054.326A117.254 117.254 0 0 0 10 16.374c.29 1.368.628 2.805.986 4.01c.18.602.368 1.163.565 1.636c.187.45.416.909.704 1.237c.62.71 1.573.92 2.362.972c.832.056 1.745-.045 2.56-.188a22.227 22.227 0 0 0 3.02-.764l.051-.017l.015-.005l.005-.002l-.323-.946Zm0 0l.851.523l-.188.306l-.34.117l-.323-.946Zm-.673-.834a14.648 14.648 0 0 0 .997-2.168c.245-.683.417-1.368.442-1.962c.026-.598-.1-.98-.305-1.215c-.283-.322-1.013-.782-2.15-1.305c-1.084-.499-2.388-.99-3.658-1.425a82.335 82.335 0 0 0-3.342-1.062l.004.025c.17.96.412 2.256.697 3.599c.285 1.346.61 2.723.946 3.854c.169.566.335 1.055.495 1.439c.17.407.298.614.362.688c.082.093.347.25.991.293c.601.04 1.335-.032 2.079-.163a20.227 20.227 0 0 0 2.442-.599Zm-2.19 9.534c-.254.014-.378.05-.41.064c-.453.205-1.829.685-3.017 1.09c-.61.209-1.195.405-1.627.55l-.028.01v5.403c.176-.008.365-.015.558-.022c.828-.03 1.813-.06 2.24-.042c1.792.071 3.138.495 4.384.888l.027.009c1.168.368 2.25.706 3.667.813c.4.03.789.069 1.152.105h.005c1.394.14 2.312.21 3.023-.048c.553-.201 2.578-1.14 4.62-2.167c1.01-.508 2-1.025 2.787-1.468c.395-.222.73-.42.987-.586c.128-.083.23-.153.308-.21a2.02 2.02 0 0 0 .09-.07l.028-.024c.1-.101.206-.453.034-.784a.73.73 0 0 0-.377-.34c-.2-.087-.54-.154-1.08-.065c-1.218.2-2.673.786-4.126 1.377l-.02.009c-.714.29-1.43.581-2.065.793c-.61.203-1.287.385-1.877.35c-.81-.05-2.231-.26-3.403-.45a135.195 135.195 0 0 1-2.018-.342l-.13-.023l-.046-.009l.19-1.984l4.57.055h.01a1.01 1.01 0 0 0 .158-.03c.158-.04.429-.139.77-.38c.105-.075.243-.213.372-.398a2.15 2.15 0 0 0 .136-.226a10.896 10.896 0 0 1-1.656-.234a12.971 12.971 0 0 1-.883-.225l-.034-.01l-5.597-1.246l-.053-.009a10.592 10.592 0 0 0-.899-.11a5.965 5.965 0 0 0-.77-.014ZM19 30.16l.181-.983l.018.003l5.718 1.272l.042.013l.008.003l.038.011l.158.045c.139.038.339.09.577.142c.486.105 1.094.202 1.656.202c.563 0 1.175.21 1.505.808c.282.512.212 1.066.113 1.432a3.582 3.582 0 0 1-.407.918c.304-.12.627-.25.966-.388l.062-.026c1.378-.56 3.03-1.232 4.493-1.473c1.7-.278 2.975.332 3.558 1.46c.514.995.4 2.307-.385 3.105c-.197.2-.49.403-.77.584a22.73 22.73 0 0 1-1.088.647c-.825.464-1.846.997-2.87 1.512c-2.022 1.017-4.152 2.012-4.836 2.26c-1.186.43-2.558.293-3.777.171l-.127-.013a45.694 45.694 0 0 0-1.108-.1c-1.66-.126-2.932-.527-4.094-.893l-.025-.008c-1.25-.394-2.376-.745-3.888-.806c-.332-.013-1.226.011-2.088.043a171.96 171.96 0 0 0-1.456.059l-.129.006l-1.046.048v-8.936l.877-.291a281.134 281.134 0 0 0 2.132-.718c1.244-.425 2.498-.866 2.84-1.02c.367-.166.784-.22 1.118-.24c.355-.02.72-.005 1.039.019a12.551 12.551 0 0 1 1.146.143l.021.004h.006l.002.001h.002L19 30.16Z"
          clipRule="evenodd"
        />
        <Path
          fillRule="evenodd"
          d="M35.15 13.24a1 1 0 0 1 .11 1.41c-2.981 3.478-6.692 8.575-8.33 12.718a1 1 0 1 1-1.86-.736c1.763-4.459 5.651-9.76 8.67-13.283a1 1 0 0 1 1.41-.108Zm-19.77 3.208a1 1 0 0 0-.165 1.405c2.242 2.845 4.69 6.486 5.852 9.506a1 1 0 0 0 1.866-.718c-1.271-3.304-3.868-7.135-6.148-10.026a1 1 0 0 0-1.404-.167Z"
          clipRule="evenodd"
        />
        <Path d="M6 29h6v13H6V29Z" />
      </G>
    </Svg>
  );
};
