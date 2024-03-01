import { TransitionLink } from '../../contexts/PageLoaderContext';

function LeaderboardIcon(props:{className?:string}) {
  return (
    <TransitionLink to={'/game/leaderboard'} className={`${props.className} block h-16 w-16 p-3 bg-text/10 backdrop-blur rounded-full cursor-pointer opacity-70`}>
        <svg
            className='w-full h-full'
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            >
            <path
                fill="currentColor"
                d="M12 16.09a5.76 5.76 0 01-5.76-5.76V3.65a4.63 4.63 0 010-.65.751.751 0 111.49.19c-.01.153-.01.307 0 .46v6.68a4.26 4.26 0 008.52 0V3.65c.01-.153.01-.307 0-.46A.75.75 0 0117.72 3c.015.216.015.434 0 .65v6.68A5.76 5.76 0 0112 16.09z"
            ></path>
            <path
                fill="currentColor"
                d="M17.55 10a.77.77 0 01-.39-.11l-.54-.32a.75.75 0 01-.25-1 .74.74 0 011-.26l.35.21c2.67-.2 3.28-3.24 3.48-4.68H2.8c.14 1.45.78 4.48 3.45 4.62l.35-.21a.74.74 0 011 .26.75.75 0 01-.25 1l-.54.32a.77.77 0 01-.39.11c-4.11 0-5.2-4.5-5.2-6.88A.76.76 0 012 2.34h20a.76.76 0 01.75.75c0 2.38-1.09 6.91-5.2 6.91zM12 21.66a.76.76 0 01-.75-.75v-5.57a.75.75 0 111.5 0v5.57a.76.76 0 01-.75.75z"
            ></path>
            <path
                fill="currentColor"
                d="M17.57 21.66h-10a.75.75 0 110-1.5h10a.75.75 0 110 1.5z"
            ></path>
        </svg>
    </TransitionLink>
  )
}
function UserIcon(props:{className?:string, onClick?:()=>void}) {
  return (
    <div onClick={props?.onClick} className={`${props.className} block h-16 w-16 p-3 bg-text/10 backdrop-blur rounded-full cursor-pointer opacity-70`}>
        <svg
            className='w-full h-full'
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            >
            <path
                fill="currentColor"
                d="M12 13.75A5.75 5.75 0 1117.75 8 5.76 5.76 0 0112 13.75zm0-10A4.25 4.25 0 1016.25 8 4.26 4.26 0 0012 3.75z"
            ></path>
            <path
                fill="currentColor"
                d="M21 21.75a.76.76 0 01-.75-.75A7.26 7.26 0 0013 13.75h-2A7.26 7.26 0 003.75 21a.75.75 0 11-1.5 0A8.76 8.76 0 0111 12.25h2A8.76 8.76 0 0121.75 21a.76.76 0 01-.75.75z"
            ></path>
        </svg>
    </div>
  )
}
function PlayIcon(props:{className?:string}) {
    return (
      <TransitionLink to={'/game/play'} className={`${props.className} block h-16 w-16 p-3 bg-text/10 backdrop-blur rounded-full cursor-pointer opacity-70`}>
          <svg
            className='w-full h-full'
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            >
            <path
                fill="currentColor"
                d="M12 22.75A10.75 10.75 0 1122.75 12 10.76 10.76 0 0112 22.75zm0-20A9.25 9.25 0 1021.25 12 9.26 9.26 0 0012 2.75z"
            ></path>
            <path
                fill="currentColor"
                d="M10.69 17.23a2 2 0 01-2-2v-6a2 2 0 011.08-1.74 2 2 0 012.05.14l4.29 3a2 2 0 010 3.24l-4.29 3a2 2 0 01-1.13.36zm0-8.46a.51.51 0 00-.22.05.48.48 0 00-.26.43v6a.48.48 0 00.26.43.44.44 0 00.49 0l4.29-3a.47.47 0 000-.78L11 8.86a.44.44 0 00-.31-.09z"
            ></path>
            </svg>
      </TransitionLink>
    )
  }

export {LeaderboardIcon , UserIcon , PlayIcon};