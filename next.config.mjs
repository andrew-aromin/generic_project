import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

export default (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {}
    }

    return {
        output: "export",
        basePath: "/generic_project",
        images: {
            unoptimized: true
        }
    }
}
