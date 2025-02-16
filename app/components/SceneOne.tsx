import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Lock, TestTube2 } from "lucide-react";
import CipherWheel from "./CipherWheel";

const SceneOne = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [code, setCode] = useState(["", "", ""]);
  const [showCipher, setShowCipher] = useState(false);

  const puzzles = [
    {
      clue: "拉丁文谜题：解剖台边缘的'Memento mori'暗示着（请输入三个数字密码）",
      solution: "513",
      hint: "九宫格输入法的数字密码转换"
    },
    {
      clue: "根据双头蛇雕像方位破解：左侧蛇头指向药库方位角（东偏北__度）",
      solution: "237",
      hint: "参考《格氏解剖学》第237页"
    },
    {
      clue: "生石灰与漂白粉比例对应的尸体腐败延缓公式（9:1→化学式原子数总和）",
      solution: "146",
      hint: "考虑摩尔质量换算"
    }
  ];

  const handleDecrypt = (index: number) => {
    const answer = prompt(puzzles[index].clue);
    if (answer === puzzles[index].solution) {
      const newCode = [...code];
      newCode[index] = "✓";
      setCode(newCode);
    } else {
      alert(`错误！提示：${puzzles[index].hint}`);
    }
  };

  return (
    <div className="p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-rose-400">第一幕：听诊器下的月光</h1>
        <div className="border-l-4 border-rose-600 pl-4">
          <p className="text-zinc-300">2007年8月17日 22:47</p>
          <p className="italic text-zinc-400">"月光在听诊器的蛇纹上蜿蜒成DNA双螺旋，你知道这是最后一次校准杀人坐标..."</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {puzzles.map((_, index) => (
          <div key={index} className="bg-zinc-700 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <TestTube2 className="text-rose-400" />
              <span className="text-sm text-zinc-400">线索 {index + 1}</span>
            </div>
            <Button 
              onClick={() => handleDecrypt(index)}
              variant="outline" 
              className="w-full bg-zinc-600 border-zinc-500 text-stone-100"
            >
              {code[index] ? "已破解" : "开始解密"} <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="bg-zinc-700 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <Lock className="text-rose-400 mr-2" />
          <span>最终密码锁</span>
        </div>
        <CipherWheel 
          code={code} 
          onComplete={() => setShowCipher(true)}
        />
      </div>

      {showCipher && (
        <div className="bg-zinc-700 p-4 rounded-lg animate-fade-in">
          <h3 className="text-rose-400 mb-2">✉️ 隐藏遗书片段：</h3>
          <p className="text-zinc-300 whitespace-pre-wrap">
            {"当你在解剖台刻下死亡警句时\n可曾听见骨骼标本的掌声？\n那具1958年的类风湿掌骨\n桡偏角度正好23.15度...\n\n（翻页出现夜视摄像机拍摄的胎记特写）"}
          </p>
        </div>
      )}
    </div>
  );
};

export default SceneOne;
