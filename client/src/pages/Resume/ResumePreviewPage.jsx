import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ResumePreview from "@/components/ResumePreview";

const ResumePreviewPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [template, setTemplate] = useState("");
  const [resumeData, setResumeData] = useState<any>(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const t = query.get("title") || "Untitled";
    const temp = query.get("template") || "modern";
    setTitle(t);
    setTemplate(temp);

    const stored = localStorage.getItem("resumes");
    if (stored) {
      const resumes = JSON.parse(stored);
      const found = resumes.find((r: any) => r.title === t && r.template === temp);
      if (found) setResumeData(found);
    }
  }, []);

  if (!resumeData) return <div className="text-center mt-20 text-gray-500">Loading...</div>;

  return <ResumePreview data={resumeData} />;
};

export default ResumePreviewPage;
