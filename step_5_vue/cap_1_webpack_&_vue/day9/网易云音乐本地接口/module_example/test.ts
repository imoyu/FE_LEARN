// @ts-ignore
import { banner, lyric } from 'NeteaseCloudMusicApi'
banner({ type: 0 }).then((res: any) => {
  console.log(res)
})
lyric({
  id: '33894312',
}).then((res: any) => {
  console.log(res)
})
