import { PreviewAIContainer } from "@/containers/preview_ai_test";

export default async function TestPreviewAI({ params }: { params: Promise<{ test_id: string }> }) {
    console.log(params)
    const { test_id } = (await params);


    return (
        <div>
             <PreviewAIContainer id={parseInt(test_id)} />
        </div>
    )
}
