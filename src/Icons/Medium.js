import * as React from "react"

const Medium = (props) => (
<svg xmlns="http://www.w3.org/2000/svg" width={props.width || 30} height={props.height || 30} {...props}>
<path d="M15 3C8.373 3 3 8.373 3 15c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm5.365 11.033l-1.674 1.686a.741.741 0 0 1-.525.217.737.737 0 0 1-.522-.217l-1.307-1.311-1.314 1.311a.744.744 0 0 1-1.048 0l-1.674-1.686a.772.772 0 0 1 0-1.075l3.316-3.343c.3-.302.786-.302 1.086 0l3.316 3.343c.3.302.3.792 0 1.094z" />
</svg>
)

export default Medium