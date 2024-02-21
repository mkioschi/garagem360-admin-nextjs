import { cn } from '@/lib/utils'

type LogoProps = { className?: string | undefined }

export function Logo({ className }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 763 249"
      className={cn('h-auto w-40', className)}
    >
      <path
        className="fill-accent"
        d="M754.021 124.292c0 68.645-55.647 124.293-124.292 124.293-68.645 0-124.292-55.648-124.292-124.293C505.437 55.648 561.084 0 629.729 0c34.411 0 65.557 13.984 88.063 36.58a28.07 28.07 0 0116.384-5.246c15.575 0 28.201 12.626 28.201 28.201 0 10.763-6.029 20.117-14.894 24.87 4.24 12.52 6.538 25.935 6.538 39.887zM29.074 179.65c-8.764 0-15.826-2.526-21.187-7.577C2.629 166.918 0 160.115 0 151.662V96.923c0-8.453 2.629-15.205 7.887-20.256 5.361-5.154 12.423-7.732 21.187-7.732 8.763 0 15.825 2.578 21.186 7.732 5.465 5.051 8.197 11.855 8.197 20.41v6.031c0 .516-.206.98-.619 1.392-.309.309-.721.464-1.237.464H42.374c-.516 0-.98-.155-1.392-.464a2.26 2.26 0 01-.464-1.392v-6.34c0-3.71-1.083-6.7-3.248-8.968-2.062-2.268-4.794-3.402-8.196-3.402s-6.135 1.134-8.197 3.402c-2.061 2.268-3.092 5.257-3.092 8.969v55.047c0 3.711 1.03 6.701 3.093 8.969 2.061 2.268 4.794 3.402 8.196 3.402s6.134-1.134 8.196-3.402c2.165-2.268 3.248-5.258 3.248-8.969v-14.844c0-.515-.258-.773-.773-.773H30.31c-.515 0-.98-.155-1.392-.464a2.26 2.26 0 01-.464-1.392v-11.288c0-.515.155-.927.464-1.237.412-.412.877-.618 1.392-.618h26.29c.516 0 .928.206 1.237.618.413.31.619.722.619 1.237v28.607c0 8.453-2.732 15.256-8.197 20.411-5.36 5.051-12.423 7.577-21.186 7.577z"
      ></path>
      <path
        className="fill-accent"
        fillRule="evenodd"
        d="M116.002 178.413c-1.238 0-1.908-.567-2.011-1.701l-2.938-16.236c0-.516-.309-.774-.928-.774H87.546c-.618 0-.928.258-.928.774l-2.938 16.236c-.103 1.134-.773 1.701-2.01 1.701H67.597c-1.444 0-2.01-.671-1.701-2.011L88.784 71.873c.206-1.134.876-1.7 2.01-1.7h16.393c1.134 0 1.804.566 2.01 1.7l22.888 104.529v.619c0 .928-.567 1.392-1.701 1.392h-14.382zm-26.6-33.555c-.103.516.155.773.773.773h17.166c.619 0 .877-.257.774-.773l-8.97-48.863c-.103-.309-.258-.464-.464-.464-.206 0-.36.155-.464.464l-8.815 48.863zM183.436 176.866c.31 1.031.98 1.547 2.011 1.547h14.846c1.134 0 1.701-.464 1.701-1.392 0-.309-.051-.567-.154-.773l-15.156-46.544c-.103-.515.052-.824.464-.927 4.433-2.371 7.887-5.876 10.361-10.515 2.475-4.639 3.712-10.154 3.712-16.545 0-6.186-1.186-11.65-3.557-16.391-2.268-4.845-5.516-8.556-9.743-11.133-4.124-2.68-8.918-4.02-14.382-4.02h-29.074c-.515 0-.979.206-1.392.618-.309.31-.464.722-.464 1.237v104.529c0 .515.155.979.464 1.392.413.309.877.464 1.392.464h14.228c.515 0 .928-.155 1.237-.464.412-.413.619-.877.619-1.392v-43.915c0-.515.257-.773.773-.773h8.196c.309 0 .567.206.773.619l13.145 44.378zm-22.887-90.458c0-.515.257-.773.773-.773h9.433c3.712 0 6.702 1.495 8.97 4.484 2.371 2.887 3.557 6.804 3.557 11.752s-1.186 8.866-3.557 11.752c-2.268 2.886-5.258 4.33-8.97 4.33h-9.433c-.516 0-.773-.258-.773-.773V86.408zM259.021 178.413c-1.238 0-1.908-.567-2.011-1.701l-2.938-16.236c0-.516-.309-.774-.928-.774h-22.579c-.618 0-.927.258-.927.774l-2.939 16.236c-.103 1.134-.773 1.701-2.01 1.701h-14.073c-1.444 0-2.011-.671-1.701-2.011l22.888-104.529c.206-1.134.876-1.7 2.01-1.7h16.393c1.134 0 1.804.566 2.01 1.7l22.888 104.529v.619c0 .928-.567 1.392-1.701 1.392h-14.382zm-26.6-33.555c-.103.516.155.773.773.773h17.166c.619 0 .877-.257.774-.773l-8.97-48.863c-.103-.309-.258-.464-.464-.464-.206 0-.361.155-.464.464l-8.815 48.863z"
        clipRule="evenodd"
      ></path>
      <path
        className="fill-accent"
        d="M289.243 172.073c5.362 5.051 12.424 7.577 21.187 7.577 8.764 0 15.826-2.526 21.187-7.577 5.464-5.155 8.196-11.958 8.196-20.411v-28.607c0-.515-.206-.927-.618-1.237a1.472 1.472 0 00-1.238-.618h-26.29c-.515 0-.979.206-1.391.618-.31.31-.464.722-.464 1.237v11.288c0 .516.154.98.464 1.392.412.309.876.464 1.391.464h9.434c.515 0 .773.258.773.773v14.844c0 3.711-1.082 6.701-3.247 8.969-2.062 2.268-4.795 3.402-8.197 3.402-3.402 0-6.134-1.134-8.196-3.402-2.062-2.268-3.093-5.258-3.093-8.969V96.769c0-3.712 1.031-6.701 3.093-8.969 2.062-2.268 4.794-3.402 8.196-3.402s6.135 1.134 8.197 3.402c2.165 2.268 3.247 5.257 3.247 8.969v6.339c0 .516.155.98.464 1.392.412.309.876.464 1.392.464h14.227c.516 0 .928-.155 1.238-.464.412-.412.618-.876.618-1.392v-6.03c0-8.556-2.732-15.36-8.196-20.411-5.361-5.154-12.423-7.732-21.187-7.732-8.763 0-15.825 2.578-21.187 7.732-5.258 5.051-7.887 11.803-7.887 20.256v54.739c0 8.453 2.629 15.256 7.887 20.411zM408.618 83.78c0 .515-.206.979-.618 1.391-.31.31-.722.464-1.238.464h-33.403c-.516 0-.774.258-.774.773v29.225c0 .516.258.773.774.773h19.795c.515 0 .927.207 1.237.619.412.309.618.721.618 1.237v11.906c0 .516-.206.98-.618 1.392-.31.309-.722.464-1.237.464h-19.795c-.516 0-.774.258-.774.773v29.38c0 .515.258.773.774.773h33.403c.516 0 .928.206 1.238.618.412.309.618.722.618 1.237v11.752c0 .515-.206.979-.618 1.392-.31.309-.722.464-1.238.464h-50.26c-.516 0-.98-.155-1.392-.464a2.266 2.266 0 01-.464-1.392V72.027c0-.514.155-.927.464-1.236.412-.412.876-.619 1.392-.619h50.26c.516 0 .928.207 1.238.619.412.31.618.722.618 1.237V83.78zM472.731 70.172c-1.031 0-1.805.413-2.32 1.237l-14.692 26.442c-.309.412-.618.412-.927 0l-15.001-26.442c-.516-.824-1.289-1.237-2.32-1.237h-14.228c-.515 0-.979.207-1.391.619-.31.31-.464.722-.464 1.237v104.529c0 .515.154.979.464 1.392.412.309.876.464 1.391.464h14.228c.515 0 .928-.155 1.237-.464.413-.413.619-.877.619-1.392v-72.985c0-.412.103-.618.309-.618.206 0 .412.154.619.464l13.454 24.431c.515.825.979 1.237 1.392 1.237.412 0 .876-.412 1.392-1.237l13.454-24.431c.206-.31.412-.464.619-.464.206 0 .309.206.309.618v72.985c0 .515.155.979.464 1.392.412.309.876.464 1.392.464h14.227c.516 0 .928-.155 1.237-.464.413-.413.619-.877.619-1.392V72.027c0-.514-.206-.927-.619-1.236a1.468 1.468 0 00-1.237-.619h-14.227z"
      ></path>
      <path
        className="fill-accent-foreground dark:fill-accent-foreground/90"
        d="M734.176 72.354c7.08 0 12.819-5.74 12.819-12.819 0-7.08-5.739-12.818-12.819-12.818-7.079 0-12.818 5.739-12.818 12.818 0 7.08 5.739 12.819 12.818 12.819zM568.397 179.65c-8.35 0-14.69-2.307-19.02-6.92-4.226-4.613-6.339-11.225-6.339-19.836v-8.765h16.081v9.533c0 7.074 2.938 10.611 8.814 10.611 2.887 0 5.051-.872 6.495-2.614 1.546-1.846 2.319-5.024 2.319-9.534v-8.765c0-4.921-.876-8.406-2.629-10.456-1.752-2.153-4.587-3.23-8.504-3.23h-5.722v-15.377h6.186c3.401 0 5.927-.871 7.576-2.614 1.753-1.742 2.629-4.664 2.629-8.765v-7.842c0-3.69-.773-6.407-2.319-8.15-1.547-1.742-3.608-2.614-6.186-2.614-5.463 0-8.195 3.332-8.195 9.995v7.074h-16.082v-5.69c0-8.61 2.114-15.223 6.34-19.836 4.33-4.613 10.515-6.92 18.556-6.92 8.144 0 14.329 2.307 18.556 6.92 4.226 4.51 6.339 11.071 6.339 19.682v3.845c0 5.843-.979 10.559-2.938 14.147-1.958 3.485-4.999 5.997-9.123 7.534v.308c4.433 1.64 7.629 4.305 9.587 7.996 1.959 3.69 2.938 8.406 2.938 14.147v9.533c0 8.612-2.164 15.224-6.494 19.837-4.227 4.51-10.515 6.766-18.865 6.766z"
      ></path>
      <path
        className="fill-accent-foreground dark:fill-accent-foreground/90"
        fillRule="evenodd"
        d="M631.237 179.65c-8.35 0-14.741-2.358-19.174-7.074-4.433-4.715-6.649-11.379-6.649-19.99V96.921c0-18.657 8.659-27.986 25.978-27.986 8.247 0 14.535 2.358 18.865 7.074 4.33 4.613 6.494 11.276 6.494 19.99v1.999H640.67v-3.076c0-7.073-2.938-10.61-8.814-10.61-3.196 0-5.567.974-7.113 2.922-1.546 1.948-2.32 5.382-2.32 10.303v20.605h.31c2.989-6.254 8.144-9.38 15.463-9.38 6.185 0 10.875 2.101 14.071 6.304 3.196 4.203 4.794 10.303 4.794 18.299v19.221c0 8.611-2.217 15.275-6.65 19.99-4.432 4.716-10.824 7.074-19.174 7.074zm8.814-25.834v-19.067c0-7.074-2.938-10.61-8.814-10.61-5.876 0-8.814 3.536-8.814 10.61v19.067c0 6.971 2.938 10.457 8.814 10.457 5.876 0 8.814-3.486 8.814-10.457zM673.512 172.576c4.433 4.716 10.824 7.074 19.174 7.074s14.741-2.358 19.174-7.074c4.433-4.715 6.649-11.379 6.649-19.99V95.999c0-8.611-2.216-15.275-6.649-19.99-4.433-4.716-10.824-7.074-19.174-7.074s-14.741 2.358-19.174 7.074c-4.433 4.715-6.649 11.379-6.649 19.99v56.587c0 8.611 2.216 15.275 6.649 19.99zm27.988-18.914c0 7.074-2.938 10.611-8.814 10.611-5.876 0-8.814-3.537-8.814-10.611v-58.74c0-7.073 2.938-10.61 8.814-10.61 5.876 0 8.814 3.537 8.814 10.61v58.74z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}