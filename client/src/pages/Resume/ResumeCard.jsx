// ResumeCard.tsx

import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface Resume {
  id: string;
  title: string;
  template: string;
  createdAt: string;
}

interface ResumeCardProps {
  resume: Resume;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ resume }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition"
      onClick={() => navigate(`/resume/${resume.id}`)}
    >
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{resume.title}</h3>
        <p className="text-sm text-gray-500">Template: {resume.template}</p>
        <p className="text-xs text-gray-400 mt-1">
          Created At: {resume.createdAt}
        </p>
      </CardContent>
    </Card>
  );
};

export default ResumeCard;
