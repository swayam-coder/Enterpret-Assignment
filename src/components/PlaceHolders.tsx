import { PlaceHolderPaper } from "../styled-components/PaperItem"

export default function PlaceHolders({ no }: { no: number }) {
    return (
      <>{
        [...Array(no)].map((_, i) => (
            <PlaceHolderPaper key={i} sx={{ height: "100px" }} />
        ))
      }</>
    )
  } 