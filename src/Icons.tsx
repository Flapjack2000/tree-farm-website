function IconFacebook({ size, stroke }: { size: number, stroke: string }) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-[var(--facebook-blue)] rounded-2xl lucide lucide-facebook-icon lucide-facebook">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </>
  )
}

function IconPineTree({ size, stroke }: { size: number, stroke: string }) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tree-pine-icon lucide-tree-pine">
        <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" />
        <path d="M12 22v-3" />
      </svg>
    </>
  )
}
function IconTractor({ size, stroke }: { size: number, stroke: string }) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tractor-icon lucide-tractor">
        <path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" />
        <path d="M16 18h-5" />
        <path d="M18 5a1 1 0 0 0-1 1v5.573" />
        <path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" />
        <path d="M4 11V4" />
        <path d="M7 15h.01" />
        <path d="M8 10.1V4" />
        <circle cx="18" cy="18" r="2" />
        <circle cx="7" cy="15" r="5" />
      </svg>
    </>
  )
}
function IconHome({ size, stroke }: { size: number, stroke: string }) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house">
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>


    </>
  )
}
export { IconFacebook, IconPineTree, IconTractor, IconHome };