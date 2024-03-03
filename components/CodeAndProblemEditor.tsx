import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeEditor from "./CodeEditor";
import ProblemEditor from "./ProblemEditor";

const CodeAndProblemEditor = () => {
  return (
    <Tabs defaultValue="Code" className="h-[100vh]">
      <TabsList>
        <TabsTrigger value="Code">Code</TabsTrigger>
        <TabsTrigger value="Problem">Problem</TabsTrigger>
      </TabsList>
      <TabsContent value="Code">
        <CodeEditor />
      </TabsContent>
      <TabsContent value="Problem" className="p-2">
        <ProblemEditor />
      </TabsContent>
    </Tabs>
  );
};

export default CodeAndProblemEditor;
