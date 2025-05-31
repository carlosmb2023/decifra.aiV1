"use client"

import { useEffect } from "react"

export function HeygenAvatar() {
  useEffect(() => {
    if (typeof window === "undefined") return
    const script = document.createElement("script")
    script.innerHTML = `
      !function(window){
        const host="https://labs.heygen.com",
        url=host+"/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJLYXR5YV9DaGFpcl9TaXR0aW5nX3B1Ymxp%0D%0AYyIsInByZXZpZXdfdGFyZ2V0LndlYnAiLCJu%0D%0AZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6ImE0MWU0NjZjOTEx%0D%0ANDRjN2Y4ODliZGEyZmZmYWJkZTFhIiwidXNlcm5hbWUiOiI3M2IzMjNkODA2MzA0MWQxOTE1OTc5%0D%0AZGE0OThhOTM1YiJ9&inIFrame=1",
        clientWidth=document.body.clientWidth,wrapDiv=document.createElement("div");
        wrapDiv.id="heygen-streaming-embed";
        const container=document.createElement("div");container.id="heygen-streaming-container";
        const stylesheet=document.createElement("style");
        stylesheet.innerHTML=\`
          #heygen-streaming-embed {
            z-index: 9999; position: fixed; left: 40px; bottom: 40px;
            width: 200px; height: 200px; border-radius: 50%;
            border: 2px solid #fff; box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.12);
            transition: all linear 0.1s; overflow: hidden;
            opacity: 0; visibility: hidden;
          }
          #heygen-streaming-embed.show { opacity: 1; visibility: visible; }
          #heygen-streaming-embed.expand {
            \${clientWidth<540?"height: 266px; width: 96%; left: 50%; transform: translateX(-50%);":"height: 366px; width: calc(366px * 16 / 9);"}
            border: 0; border-radius: 8px;
          }
          #heygen-streaming-container { width: 100%; height: 100%; }
          #heygen-streaming-container iframe { width: 100%; height: 100%; border: 0; }
        \`;
        const iframe=document.createElement("iframe");
        iframe.allowFullscreen=!1,iframe.title="Streaming Embed",iframe.role="dialog",iframe.allow="microphone",iframe.src=url;
        let visible=!1,initial=!1;
        window.addEventListener("message",(e=>{
          e.origin===host&&e.data&&e.data.type&&"streaming-embed"===e.data.type&&(
            "init"===e.data.action?(initial=!0,wrapDiv.classList.toggle("show",initial)):
            "show"===e.data.action?(visible=!0,wrapDiv.classList.toggle("expand",visible)):
            "hide"===e.data.action&&(visible=!1,wrapDiv.classList.toggle("expand",visible))
          )
        }));
        container.appendChild(iframe);
        wrapDiv.appendChild(stylesheet);
        wrapDiv.appendChild(container);
        document.body.appendChild(wrapDiv)
      }(globalThis);
    `
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return null
}
