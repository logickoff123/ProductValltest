import { PreviewAIContainer } from "@/containers/preview_ai_test";

export default function TestPreviewAI({ params }: { params: { test_id: string } }) {
    console.log(params)


    return (
        <div>
             <PreviewAIContainer id={parseInt(params.test_id)} />
        </div>
    )
}