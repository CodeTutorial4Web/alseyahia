import ArticleItem from "../cards/ArticleItem";
import Header from "../general/Header";

export default function BlogSection() {


    const articles = [
        {
          date: "20/12/2021",
          title: "أهمية الالتزام بالقوانين المدرسية",
          content: "تُعدّ القوانين المدرسية أساسًا في تنظيم الحياة المدرسية وضمان سير العملية التعليمية بسلاسة. في مدرسة القرية السياحية الأولى، يُشجَّع الطلاب على الالتزام بهذه القوانين التي تساهم في توفير بيئة تعليمية آمنة ومحفزة للتعلم. إن الانضباط واحترام القواعد يُسهمان في تعزيز روح المسؤولية لدى الطلاب، مما ينعكس إيجابيًا على سلوكهم وتفوقهم الدراسي."
        },
        {
          date: "12/2/2022",
          title: "دور الأنشطة المدرسية في تنمية مهارات الطلاب",
          content: "تُولي مدرسة القرية السياحية الأولى اهتمامًا كبيرًا بالأنشطة المدرسية التي تُسهم في تطوير مهارات الطلاب وتوسيع آفاقهم. فمن خلال الرياضة، والمسرح، والفنون، يتمكن الطلاب من اكتشاف مواهبهم وصقل مهاراتهم. إن مشاركة الطلاب في الأنشطة تجعلهم أكثر ثقة بأنفسهم وأكثر انفتاحًا على الآخرين، مما يعزز روح التعاون والعمل الجماعي لديهم."
        },

        {
          date: "30/4/2023",
          title: "التكنولوجيا في خدمة التعليم",
          content: "في إطار سعيها لمواكبة التطور التكنولوجي، تقوم مدرسة القرية السياحية الأولى باستخدام وسائل تعليمية حديثة، تشمل أجهزة الكمبيوتر، والشاشات الذكية، والبرامج التعليمية المتنوعة. تُمكّن التكنولوجيا الطلاب من الوصول إلى مصادر معرفة جديدة وتسهيل عملية التعلم التفاعلي، ما يجعل الحصص الدراسية أكثر متعة وإفادة."
        },
        {
          date: "12/5/2023",
          title: "كيف تعزز القراءة ثقافة الطالب؟",
          content: "تُشجِّع مدرسة القرية السياحية الأولى طلابها على القراءة باعتبارها وسيلة مهمة لاكتساب المعرفة وتوسيع آفاقهم. إن القراءة لا تُضيف للطلاب معلومات فقط، بل تطور مهارات التفكير النقدي والإبداعي لديهم. كما أنها تُساعد في تحسين مهارات اللغة والتعبير. ويُعد تخصيص وقت للقراءة اليومية جزءًا أساسيًا من الأنشطة التعليمية التي تساهم في تنمية شخصية الطالب."
        },
        {
          date: "15/3/2024",
          title: "أهمية حضور حصص التقوية",
          content: "حرصًا على دعم الطلاب أكاديميًا، تقدم مدرسة القرية السياحية الأولى حصص تقوية إضافية في مواد مختلفة للطلاب الذين يحتاجون إلى دعم إضافي. تسهم هذه الحصص في رفع مستوى الطالب الأكاديمي وتعزيز قدراته في المواد التي يجد فيها صعوبة، مما يساهم في تحسين نتائجه وزيادة ثقته بنفسه. يُشجَّع الطلاب وأولياء الأمور على الاستفادة من هذه الحصص لتحقيق أقصى استفادة تعليمية."
        },
        {
          date: "12/10/2024",
          title: "الحفاظ على نظافة المدرسة مسؤولية الجميع",
          content: "تعتبر النظافة جزءًا لا يتجزأ من سلوك الطالب الإيجابي، وفي مدرسة القرية السياحية الأولى، يُشجَّع الطلاب على الاهتمام بنظافة فصولهم وساحاتهم. إن الحفاظ على بيئة نظيفة يعكس حرص الجميع على رفاهية المدرسة ويعزز روح المسؤولية. وتُقدَّم حملات توعوية في المدرسة لتعليم الطلاب أهمية النظافة وطرق الحفاظ على البيئة المدرسية، بهدف تهيئة جو صحي وآمن للجميع."
        }
      ];

      
  return (
    <section className="homepageSection blogSection m-top p-inline">
      <Header text="المدونة" />

      <div className="blog__grid">
        
        {articles.map((article, index) => <ArticleItem  key={index} title={article.title} content={article.content} date={article.date}/>)}
      </div>
    </section>
  );
}