import type { PerfCallback } from "$lib/constants";
import ASS from "ass-html5";

export default async function (
  subUrl: string,
  video: HTMLVideoElement,
  timeOffset = 0,
  fonts: string[] = [],
  cb: PerfCallback,
) {
  const instance = new ASS({
    video,
    subUrl,
    font_urls: fonts,
    debug: true,
    timeOffset,
    onsubtitleFrameCallback: (_now, info) => cb(info),
  });

  await instance.render();

  return () => instance.destroy();
}
