import Link from "next/link";
import { PostMetaData } from "./PostMetadata";

export default function PostPreview(props: PostMetaData) {


    return (
    
    <>

        <Link href={`/posts/${props.slug}`}>
            <div>
                <h3 className="hover:font-medium hover:decoration-slate-400  underline underline-offset-4 decoration-slate-300">{props.title}</h3>
                {/* <p className="text-fuchsia-700">{new Date(props.date).toDateString()}</p> */}
            </div>
        </Link>
    </>
    )
}