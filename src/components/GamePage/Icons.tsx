import { TransitionLink } from '../../contexts/PageLoaderContext';

function LeaderboardIcon(props: { className?: string }) {
  return (
    <TransitionLink to={'/game/leaderboard'} className={`${props.className} block h-16 w-16 p-3 bg-text/10 hover:bg-text/50 active:scale-95 duration-200 backdrop-blur rounded-full cursor-pointer opacity-70`}>
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
function UserIcon(props: { className?: string, onClick?: () => void }) {
  return (
    <div onClick={props?.onClick} className={`${props.className} block h-16 w-16 p-3 bg-text/10 hover:bg-text/50 active:scale-95 duration-200 backdrop-blur rounded-full cursor-pointer opacity-70`}>
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
function PlayIcon(props: { className?: string }) {
  return (
    <TransitionLink to={'/game/play'} className={`${props.className} block h-16 w-16 p-3 bg-text/10 hover:bg-text/50 active:scale-95 duration-200 backdrop-blur rounded-full cursor-pointer opacity-70`}>
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
function ExitIcon(props: { className?: string }) {
  return (
    <TransitionLink to={'/'} className={`${props.className} block h-16 w-16 p-3 bg-text/10 hover:bg-text/50 active:scale-95 duration-200 backdrop-blur rounded-full cursor-pointer opacity-70`}>
      <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 21.73C10.1272 21.7331 8.30635 21.1147 6.82281 19.9717C5.33927 18.8287 4.27692 17.2257 3.80228 15.4141C3.32764 13.6025 3.46754 11.6846 4.20006 9.96097C4.93257 8.23739 6.2163 6.80559 7.85 5.88999C8.02061 5.79862 8.21993 5.77674 8.4063 5.82893C8.59266 5.88111 8.75165 6.00331 8.85 6.16999C8.93562 6.34272 8.95334 6.54128 8.89964 6.72644C8.84595 6.91159 8.72475 7.06987 8.56 7.16999C7.21471 7.92138 6.15495 9.09567 5.54506 10.5107C4.93516 11.9258 4.80923 13.5026 5.18679 14.9965C5.56435 16.4904 6.4243 17.8181 7.63327 18.7734C8.84224 19.7288 10.3327 20.2586 11.8734 20.2806C13.4142 20.3026 14.9191 19.8156 16.1549 18.8952C17.3907 17.9747 18.2882 16.6722 18.7083 15.1897C19.1283 13.7071 19.0475 12.1274 18.4783 10.6955C17.9091 9.26359 16.8833 8.0595 15.56 7.26999C15.4766 7.2168 15.4045 7.14772 15.3478 7.06667C15.2911 6.98562 15.251 6.8942 15.2296 6.79762C15.2083 6.70105 15.2061 6.60122 15.2234 6.50382C15.2406 6.40643 15.2768 6.31338 15.33 6.22999C15.3832 6.1466 15.4523 6.0745 15.5333 6.01781C15.6144 5.96113 15.7058 5.92096 15.8024 5.8996C15.9974 5.85647 16.2016 5.89258 16.37 5.99999C17.9654 6.94939 19.2042 8.39721 19.8954 10.1203C20.5867 11.8433 20.6919 13.7459 20.195 15.5346C19.698 17.3234 18.6265 18.8991 17.1455 20.0186C15.6646 21.1382 13.8565 21.7396 12 21.73Z" fill="currentColor"/>
        <path d="M12 9.8C11.8019 9.79741 11.6126 9.71756 11.4725 9.57747C11.3324 9.43737 11.2526 9.24811 11.25 9.05V3C11.25 2.80109 11.329 2.61032 11.4697 2.46967C11.6103 2.32902 11.8011 2.25 12 2.25C12.1989 2.25 12.3897 2.32902 12.5303 2.46967C12.671 2.61032 12.75 2.80109 12.75 3V9C12.7554 9.10228 12.7401 9.2046 12.7049 9.30081C12.6698 9.39701 12.6156 9.48513 12.5455 9.55985C12.4755 9.63457 12.391 9.69436 12.2973 9.73563C12.2035 9.7769 12.1024 9.79879 12 9.8Z" fill="currentColor"/>
      </svg>
    </TransitionLink>
  )
}

export { LeaderboardIcon, UserIcon, PlayIcon , ExitIcon};