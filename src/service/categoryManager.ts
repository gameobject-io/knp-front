import axios from "axios";

interface Props {
  api: string;
  handler: (data: any) => void;
}

export function categoryManager({ api, handler }: Props) {
  try {
    axios
      .get(api, {
        headers: {
          "Cache-Control": "no-cache",
        },
      })
      .then((res) => {
        handler(res.data);
      });
  } catch (error) {
    console.log(error);
  }
}
