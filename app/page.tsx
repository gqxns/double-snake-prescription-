import SceneOne from "../components/SceneOne";
import { Card } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="min-h-screen bg-zinc-900 text-stone-100 p-8">
      <Card className="bg-zinc-800 border-zinc-700 max-w-4xl mx-auto">
        <SceneOne />
      </Card>
    </div>
  );
}
