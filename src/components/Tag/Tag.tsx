import { Chip } from "@mui/material";
import { FC } from "react";


interface TagProps {
    tag: string;
}

const Tag: FC<TagProps> = ({ tag }) => {
    return(
        <div className="tag">
            <Chip label={tag} variant="outlined"/>
        </div>
    )
}

export default Tag;