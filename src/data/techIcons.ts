import type { ComponentType } from "react";
import {
  SiPython,
  SiDotnet,
  SiOpenjdk,
  SiJavascript,
  SiFlask,
  SiUnity,
  SiPytorch,
  SiLangchain,
} from "react-icons/si";
import { Database } from "lucide-react";

type TagIcon = ComponentType<{ size?: number; color?: string }>;

export const techIcons: Record<string, { Icon: TagIcon; color: string }> = {
  Python: { Icon: SiPython, color: "#3776AB" },
  "C#": { Icon: SiDotnet, color: "#512BD4" },
  Java: { Icon: SiOpenjdk, color: "var(--color-fg)" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  SQL: { Icon: Database, color: "var(--color-fg)" },
  Flask: { Icon: SiFlask, color: "#3BABC3" },
  Unity: { Icon: SiUnity, color: "var(--color-fg)" },
  PyTorch: { Icon: SiPytorch, color: "#EE4C2C" },
  LangChain: { Icon: SiLangchain, color: "#7FC8FF" },
};
