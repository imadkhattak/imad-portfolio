import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      period: "2021 - 2025",
      degree: "BS Data Science",
      school: "Institute of Management Sciences, Peshawar",
      meta: "CGPA: 3.09/4.0"
    }
  ];

  const certifications = [
    {
      title: "IBM AI Engineering Professional Certificate",
      issuer: "Coursera"
    },
    {
      title: "Applied Data Science Lab",
      issuer: "World Quant University"
    },
    {
      title: "Deep Learning Fundamentals",
      issuer: "World Quant University"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-wider uppercase mb-2">Qualifications</p>
          <h2 className="text-4xl font-bold text-foreground">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education Column */}
          <div>
             <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                 <GraduationCap size={20} />
               </div>
               <h3 className="text-2xl font-bold text-foreground">Education</h3>
             </div>

             <div className="space-y-6">
               {education.map((edu, index) => (
                 <Card key={index} className="bg-card border-none shadow-sm hover:shadow-md transition-shadow">
                   <CardContent className="p-6">
                     <span className="text-sm text-foreground-muted flex items-center mb-2">
                       <Calendar className="w-3 h-3 mr-1" />
                       {edu.period}
                     </span>
                     <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                     <p className="text-foreground-muted text-sm mb-3">{edu.school}</p>
                     {edu.meta && (
                       <Badge variant="secondary" className="bg-background-tertiary text-foreground-muted font-normal">
                         {edu.meta}
                       </Badge>
                     )}
                   </CardContent>
                 </Card>
               ))}
             </div>
          </div>

          {/* Certifications Column */}
          <div>
             <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                 <Award size={20} />
               </div>
               <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
             </div>

             <div className="space-y-6">
               {certifications.map((cert, index) => (
                 <Card key={index} className="bg-card border-none shadow-sm hover:shadow-md transition-shadow">
                   <CardContent className="p-6">
                     <div className="flex items-start gap-4">
                        <div className="mt-1">
                           <Award className="w-5 h-5 text-yellow-500" />
                        </div>
                        <div>
                           <h4 className="text-lg font-bold text-foreground mb-1">{cert.title}</h4>
                           <p className="text-foreground-muted text-sm">{cert.issuer}</p>
                        </div>
                     </div>
                   </CardContent>
                 </Card>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
