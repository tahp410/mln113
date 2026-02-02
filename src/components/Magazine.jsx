import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { VietnamMap, Mandala } from './SVGElements';

const Magazine = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);

  const pages = [
    {
      id: 1,
      title: 'DÂN CHỦ',
      subtitle: 'VÀ CON ĐƯỜNG',
      subtitle2: 'PHÁT TRIỂN CỦA VIỆT NAM',
      type: 'cover',
      bgGradient: 'from-red-700 via-red-600 to-amber-100',
    },
    {
      id: 2,
      title: 'Dân chủ',
      subtitle: 'có đồng nhất với chủ nghĩa tự bản?',
      type: 'content-with-map',
      bgGradient: 'from-red-100 via-red-50 to-red-100',
      hasMap: true,
    },
    {
      id: 3,
      title: 'Dân chủ là gì theo quan điểm khoa học?',
      content: `Theo Chủ nghĩa Mác – Lênin, dân chủ là một hình thức tổ chức quyền lực nhà nước trong đó nhân dân nắm giữ quyền lực và những quyền này được thực hiện theo những khái niệm trừu tượng, phi lịch sử, mà luôn gắn liền với:

• Trình độ phát triển kinh tế
• Cơ cấu giai cấp
• Quan hệ sản xuất trong xã hội

Vì vậy, không tồn tại một mô hình dân chủ chung cho mọi thời đại và mọi quốc gia.`,
      type: 'content-with-map-right',
      bgGradient: 'from-red-800 to-red-900',
      hasMap: true,
    },
    {
      id: 4,
      title: 'Trình độ phát triển kinh tế',
      content: `Trình độ phát triển kinh tế là cơ sở vật chất trực tiếp để thực hiện dân chủ trong xã hội. Khi nền kinh tế phát triển, của cải xã hội được tạo ra nhiều hơn, nhà nước và xã hội có điều kiện để bảo vệ và thực hiện các quyền dân chủ của nhân dân trên thực tế, chứ không chỉ trên danh nghĩa.

Ngoài ra, mức độ kiến thức lao động nan, các quyền dân chủ đế bị han chế hoặc chi tồn tại dưới hình thức thực hành thực. Do đó, theo Chủ nghĩa Mác – Lênin, dân chủ không thể tách rời sự phát triển của lực lượng sản xuất và nền tảng kinh tế của xã hội.`,
      type: 'content-with-map-right',
      bgGradient: 'from-red-800 to-red-900',
      hasMap: true,
    },
    {
      id: 5,
      title: 'Cơ cấu giai cấp trong xã hội',
      content: `Trong xã hội có giai cấp, dân chủ luôn mang bản chất giai cấp. Quyền lực chính trị và quyền lực xã hội trên thực tế thuộc về giai cấp độc lập trên mặt pháp luật tự do của giai cấp độc lập.

Theo quan điểm Mác – Lênin, trong xã hội từ ban chủ nghĩa, dân chủ trong xã hội chủ nghĩa, dân chủ hướng tới (việc xóa bỏ quyền lực giai cấp trong xã hội chủ nghĩa, cơ chế chính trị cùng với tương lai hình thức thực hành thực. Do đó, theo Chủ nghĩa Mác – Lênin, quan lực lượng giai cấp công nhân, nhân dân lao động và toàn thể nhân dân.`,
      type: 'content-with-map-right',
      bgGradient: 'from-red-800 to-red-900',
      hasMap: true,
    },
    {
      id: 6,
      title: 'Quan hệ sản xuất đang tồn tại',
      content: `Quan hệ sản xuất, đặc biệt là quan hệ sản xuất có vai trò quyết định phạm vi và nội dung của dân chủ. Khi từ liều sản xuất tập trung trong tay thiểu số, quyền lực chính trị và quyền lực kinh tế sẽ tập trung, làm hạn chế dân chủ.

Theo Chủ nghĩa Mác – Lênin, việc xây dựng quan hệ sản xuất xã hội chủ nghĩa – trong đó tư liệu sản xuất chủ yếu thuộc và toàn xã hội – là điều kiện quan trọng để mở rộng và bảo đảm dân chủ chính trị với quyền lực kinh tế của nhân dân.`,
      type: 'content-with-map-right',
      bgGradient: 'from-red-800 to-red-900',
      hasMap: true,
    },
    {
      id: 7,
      title: 'Dân chủ là sản phẩm của lịch sử',
      content: `Trong lịch sử xã hội loài người, dân chủ hình thành và phát triển qua nhiều giai đoạn:

• Trong xã hội chiếm hữu nô lệ và phong kiến, quyền lực thuộc về thiểu số thống trị.

• Dân chủ tư sản ra đời cùng với sự phát triển của chủ nghĩa tư bản, mở rộng quyền chính trị cho công dân.

Tuy nhiên, theo CNXHKH, dân chủ tư sản chỉ là một hình thức dân chủ có giới hạn, vì nó phản ánh lợi ích của giai cấp nam giữ từ liệu sản xuất chủ yếu.`,
      type: 'content-with-map-right',
      bgGradient: 'from-red-800 to-red-900',
      hasMap: true,
    },
    {
      id: 8,
      title: 'Dân chủ trong xã hội chiếm hữu nô lệ và xã hội phong kiến',
      content: `Trong xã hội chiếm hữu nô lệ và xã hội phong kiến, quyền lực xã hội và quyền lực xã hội thuộc về thiểu số giai cấp thống trị. Dân chủ, nếu có, chỉ tồn tại dưới hình thức rất hạn chế và mang tính hình thức, phục vụ lợi ích của giai cấp chủ nô hoặc giai cấp phong kiến.

Đại đa số người lao động, như nô lệ và nông dân, không có quyền chính trị thực sự, không được tham gia vào quá trình quyết định các vấn đề chung của xã hội.

Vì vậy, dân chủ trong các xã hội này mang tính bị hạn chế nghiêm trọng, phân ánh bản chất giai cấp của quyền lực nhà nước.`,
      type: 'content-with-map-right',
      bgGradient: 'from-red-800 to-red-900',
      hasMap: true,
    },
    {
      id: 9,
      title: 'Dân chủ từ sản và sự ra đời của chủ nghĩa tự bản',
      content: `Dân chủ từ sản hình thành và phát triển cùng với sự ra đời và phát triển của chủ nghĩa tư bản, đánh dấu một bước tiến quan trọng trong lịch sử nhân loại. Theo quan điểm của Chủ nghĩa Mác – Lênin, dân chủ từ sản mang bản chất giai cấp rõ rệt, bộ quyền lực kinh tế và xã hội chính trị trên thực tế chủ yếu của sự lực trong tay giai cấp tư sản.

Do đó, dù hình thức dân chủ từ sản có mở rộng những quyền chính trị cho công dân, được nhân các quyền từ do cơ bản và bình đẳng trước pháp luật, chủ quyền một cách chất giai cấp của quyền lực nhân dân được ứng dụng chủ nghĩa tư bản là những điều kiện để dân chủ từ sản tồn tại và phát triển.`,
      type: 'content-with-map-right',
      bgGradient: 'from-red-800 to-red-900',
      hasMap: true,
      showBackButton: true,
    },
    {
      id: 10,
      title: 'TIẾN BỘ NHỮNG CHƯA TRIỆT ĐỀ',
      content: `Dân chủ tư sản đánh dấu bước tiến quan trọng trong trong lịch sử nhân loại, nhưng về bản chất vẫn là nền dân chủ mang tính giai cấp.

Quyền lực chính trị tuy được mở rộng về hình thức, song quyền lực kinh tế vẫn tập trung trong tay thiểu số các nhà tư bản.

"Dân chủ tư sản không đồng nhất với dân chủ thực chất cho toàn xã hội."`,
      type: 'content-with-box',
      bgGradient: 'from-red-800 to-red-900',
    },
    {
      id: 11,
      title: 'SỰ RA ĐỜI CỦA DÂN CHỦ XÃ HỘI CHỦ NGHĨA',
      content: `Từ việc phê phán những hạn chế của dân chủ từ sản, Chủ nghĩa xã hội khoa học đã kháng định sự cần thiết của một kiểu dân chủ mới: dân chủ xã hội chủ nghĩa.

Dân chủ xã hội chủ nghĩa là nền dân chủ trong đó:`,
      buttons: [
        'Quyền lực thực sự thuộc về nhân dân lao động',
        'Nhân dân không chỉ có quyền chính trị hình thức, mà còn có quyền làm chủ về kinh tế và xã hội',
        'Dân chủ gắn liền với công bằng xã hội'
      ],
      type: 'content-with-buttons-center',
      bgGradient: 'from-red-800 to-red-900',
      hasMap: true,
      footer: 'Đây là bước phát triển cao hơn về chất của dân chủ trong lịch sử.'
    },
    {
      id: 11.5,
      title: 'SỰ RA ĐỜI CỦA DÂN CHỦ XÃ HỘI CHỦ NGHĨA',
      content: `Từ việc phê phán những hạn chế của dân chủ từ sản, Chủ nghĩa xã hội khoa học đã kháng định sự cần thiết của một kiểu dân chủ mới: dân chủ xã hội chủ nghĩa.

Dân chủ xã hội chủ nghĩa là nền dân chủ trong đó:
Theo Chủ nghĩa xã hội khoa học, dân chủ xã hội chủ nghĩa trước hết được xác định bởi quyền lực thực sự của nhân dân lao động.
Khác với các hình thức dân chủ trước đó, nơi quyền lực chính trị thường bị phủi các nhóm lợi ích kinh tế, dân chủ xã hội chủ nghĩa hướng tới việc bảo đảm để nhân dân lao động trực tiếp tham gia vào quá trình quyết định các vấn đề chính trị – xã hội, đặc biệt là những vấn đề liên quan đến quyền lực kinh tế và quyền lực xã hội.
Quyền lực của nhân dân không chỉ được thừa nhận và một pháp pháp lý, mà còn được tổ chức và bảo đảm thông qua các thiết chế chính trị – xã hội như các hội đồng nhân dân, các tổ chức xã hội, và các hình thức khác của dân chủ xã hội chủ nghĩa đề nhân dân lao động.`,
      type: 'content-with-box-full',
      bgGradient: 'from-red-800 to-red-900',
      footer: 'Đây là bước phát triển cao hơn về chất của dân chủ trong lịch sử.'
    },
    {
      id: 12,
      title: 'VIỆT NAM LỰA CHỌN CON ĐƯỜNG XÃ HỘI CHỦ NGHĨA',
      content: `Việt Nam lựa chọn con đường đi lên chủ nghĩa xã hội xuất phát từ điều kiện lịch sử, kinh tế và xã hội của đất nước.

Việc không đi theo con đường tư bản chủ nghĩa không đồng nghĩa với việc phủ nhân dân chủ, mà là xây dựng dân chủ theo một mô hình khác – phù hợp với lợi ích của đa số nhân dân.

Dân chủ ở Việt Nam được thể hiện thông qua:`,
      buttons: ['Quyền', 'Nhà nước', 'Sự thận gia'],
      type: 'content-with-buttons',
      bgGradient: 'from-red-800 to-red-900',
    },
    {
      id: 13,
      title: 'KHÔNG CÓ DÂN CHỦ NẾU KHÔNG ĐI THEO CHỦ NGHĨA TỰ BẢN?',
      content: `Nhiều quan điểm cho rằng dân chủ chỉ tồn tại trong các quốc gia tự bản chủ nghĩa. Tuy nhiên, theo quan điểm Mác – Lênin, dân chủ xã hội chủ nghĩa không chỉ tồn tại mà còn là hình thức dân chủ cao hơn, hướng khi đó được công cộng chủ nghĩa xã hội.

Từ một quan điểm khác, quốc gia không chỉ là một cách làm việc, như hộp lý lý, không bắt buộc phải được xem xét một cách nghiêm túc.`,
      cards: [
        {
          title: 'Đồng nhất dân chủ với một mô hình duy nhất',
          description: 'Chi tiêu'
        },
        {
          title: 'Bỏ qua bản chất giai cấp của dân chủ',
          description: 'Chi tiêu'
        },
        {
          title: 'Không đặt dân chủ trong tiến trình lịch sử cụ thể',
          description: 'Chi tiêu'
        }
      ],
      type: 'content-with-cards',
      bgGradient: 'from-red-100 via-red-50 to-red-100',
    },
    {
      id: 15,
      title: 'Đồng nhất dân chủ với một mô hình duy nhất',
      content: `Nhân định cho rằng dân chủ chỉ có tồn tại trong khuôn khổ của chủ nghĩa tự bản chứa đó có nhiều điểm bất cập và những điều kiện lịch sử, xã hội của chủ được xây dựng. Cách tiếp cận này bỏ sót quan trọng một bản chất: dân chủ khởi những điều kiện lịch sử cụ thể của nó, với tính đa dạng và độc lập. Khi đó, dân chủ không còn được nhận nhận như một phạm trù lịch sử sắn có sẵn, mà là sản phẩm của quá trình phát triển của các xã hội cụ thể.

Theo Chủ nghĩa xã hội khoa học, dân chủ không phải là sản phẩm riêng của chủ nghĩa tự bản, mà là kết quả của quá trình phát triển lịch sử lâu dài, gắn liền với trình độ phát triển kinh tế, cơ cấu giai cấp và quan hệ sản xuất của xã hội. Trong lịch sử, sự ton tại của những hình thức dân chủ khác nhau phản ánh bản chất giai cấp của quyền lực nhà nước, đồng thời cũng phát triển theo mức độ phát triển của xã hội.`,
      type: 'content-with-box-full',
      bgGradient: 'from-red-800 to-red-900',
      showBackButton: true,
    },
    {
      id: 16,
      title: 'Bỏ qua bản chất giai cấp của dân chủ',
      content: `Quan điểm phủ nhân dân chủ ở Việt Nam thường liên kết với khái niệm "nước phương tây" lại lịch giai cấp. Tuy nhiên, theo Chủ nghĩa xã hội khoa học, dân chủ luôn mang bản chất giai cấp, được sản xuất nhất định. Lịch sử cho thấy, mô hình thực dân chủ trên thực tế là đắm liên với hợp định hành động chính trị phía bộ phận được chính sách làm chủ của giai cấp nhất định. Những về thực chất văn là dân chủ của giai cấp tư sản, bởi quyền lực thực sự nằm trong tay các nhà tư bản, dù hình thức có vẻ công cộng và bình đẳng.

Trong bối cảnh Việt Nam, dân chủ xã hội chủ nghĩa được xây dựng trên cơ sở dân chủ cho nhân dân được nhân dân lao động chủ yếu, được quy định trong lịch sử để thực hiện bình đẳng về chất lẫn về hình thức với quan đảm nhân dân lao động và cải thiện điều kiện sống được các quiết định chính trị và phát triển kinh tế.`,
      type: 'content-with-box-full',
      bgGradient: 'from-red-800 to-red-900',
      showBackButton: true,
    },
    {
      id: 17,
      title: 'Không đặt dân chủ trong tiến trình lịch sử cụ thể',
      content: `Một hạn chế cơ bản của nhân định phủ nhân dân chủ xã hội chủ nghĩa là xem dân chủ như một phạm trù trừu tượng, ngủi lập lực lác, thay vì đặt nó trong tiến trình lịch sự cụ thể. Theo Chủ nghĩa Mác – Lênin, dân chủ là một phạm trù lịch sử, luôn động và biến đổi cùng với sự phát triển của xã hội. Không tồn tại một mô hình dân chủ chung, bất biến cho mọi thời đại mọi quốc gia, mà là một quá trình lâu dài, tương ứng với điều kiện cụ thể của mỗi xã hội.

Trong bối cảnh Việt Nam, dân chủ xã hội chủ nghĩa được xây dựng trong những điều kiện lịch sử đặc thù, với xuất phát điểm kinh tế lạc hậu, nền độc lập chủ quyền bị xâm chiếm nhiều thế kỷ, và sự phân chia giai cấp sâu sắc. Việc mở rộng và hoàn thiện dân chủ không thể diễn ra một quá trình lâu dài, tương ứng với sự phát triển kinh tế – xã hội của đất nước. Những số sánh giới hạn, tách rời bối cảnh lịch sử cụ thể đó, vị là phi lịch sử và không khoa học về sự phát triển của dân chủ .`,
      type: 'content-with-box-full',
      bgGradient: 'from-red-800 to-red-900',
      showBackButton: true,
    },
    {
      id: 14,
      title: 'DÂN CHỦ TRONG ĐỜI SỐNG THỰC TIỄN',
      subtitle: 'Dân chủ xã hội chủ nghĩa hiện diễn trong đời sống hàng ngày như thế nào?',
      content: `Dân chủ xã hội chủ nghĩa không chỉ được thể hiện thông qua các cơ chế chính trị, mà còn thông qua mối quan hệ giữa bộ máy của người dân, mà còn thông qua mối quan hệ giữa bộ máy nhà nước và phát triển đất nước. Theo quan điểm của Chủ nghĩa Mác – Lênin và lý luận Hồ Chí Minh, dân chủ là nha nước của nhân dân, do nhân dân và vì nhân dân trong quá trình xây dựng và phát triển đất nước.

Trong cách tiếp cận này, cần chủ động tạo điều kiện chính trị và trật tự xã hội, mà được thực hiện thông qua của nhà nước, pháp luật để quyền hạn được thực hiện một cách chặt chẽ và đúng định chính trị là la nhân tăng độc lập, chính sách được phát triển bên vững. Chính vì kết hợp giữa phát huy dân chủ và chi đủ với khoa học, chính sách được vạch ra, cùng có và từng bước hoàn thiện trong thực tiễn phát triển của đất nước.`,
      buttons: ['Nhân dân làm chủ', 'Quyền lực thuộc về dân', 'Thực hành quyền làm chủ'],
      type: 'content-with-buttons-right',
      bgGradient: 'from-red-100 via-red-50 to-red-100',
      hasMap: true,
    },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1 && !scrollLocked) {
      setScrollLocked(true);
      setCurrentPage(currentPage + 1);
      setTimeout(() => setScrollLocked(false), 600);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0 && !scrollLocked) {
      setScrollLocked(true);
      setCurrentPage(currentPage - 1);
      setTimeout(() => setScrollLocked(false), 600);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (scrollLocked) return;
    if (e.deltaY > 50) handleNext();
    else if (e.deltaY < -50) handlePrev();
  };

  const pageVariants = {
    enter: (direction) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: { zIndex: 1, y: 0, opacity: 1 },
    exit: (direction) => ({
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const pageTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
    mass: 0.5
  };

  const currentPageData = pages[currentPage];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black" onWheel={handleWheel}>
      <AnimatePresence initial={false} custom={currentPage} mode="wait">
        <motion.div
          key={currentPage}
          custom={currentPage}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={pageTransition}
          className={`absolute inset-0 w-full h-screen bg-gradient-to-r ${currentPageData.bgGradient} flex flex-col items-center justify-center p-8 overflow-hidden`}
        >
          <div className="w-full h-full flex items-center justify-center relative z-10">
            {currentPageData.type === 'cover' && (
              <div className="w-full h-full flex items-center justify-between px-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 flex flex-col items-center justify-center"
                >
                  <div className="mb-8">
                    <VietnamMap className="w-40 h-40 md:w-56 md:h-56" />
                  </div>
                  <motion.div
                    className="text-center space-y-3"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl" style={{textShadow: '0 4px 8px rgba(180, 20, 20, 0.8)'}}>
                      {currentPageData.title}
                    </h1>
                    <p className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl" style={{textShadow: '0 3px 6px rgba(180, 20, 20, 0.8)'}}>
                      {currentPageData.subtitle}
                    </p>
                    <p className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl" style={{textShadow: '0 3px 6px rgba(180, 20, 20, 0.8)'}}>
                      {currentPageData.subtitle2}
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50, rotate: -180 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-1 flex items-center justify-center hidden lg:flex"
                >
                  <Mandala className="w-80 h-80 xl:w-96 xl:h-96" />
                </motion.div>
              </div>
            )}

            {currentPageData.type === 'content-with-map' && (
              <div className="w-full h-full flex items-center justify-between px-8 md:px-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 flex flex-col justify-center space-y-6"
                >
                  <div className="space-y-4">
                    <h2 className="text-5xl md:text-6xl font-bold text-red-800">
                      {currentPageData.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-black font-medium max-w-md">
                      {currentPageData.subtitle}
                    </p>
                  </div>
                  <motion.div
                    className="w-48 h-0.5 bg-red-400"
                    initial={{ width: 0 }}
                    animate={{ width: 192 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{ backgroundImage: 'repeating-linear-gradient(90deg, currentColor 0px, currentColor 4px, transparent 4px, transparent 8px)' }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 flex items-end justify-end h-full pb-8"
                >
                  <VietnamMap className="w-64 h-64 md:w-80 md:h-80" />
                </motion.div>
              </div>
            )}

            {currentPageData.type === 'content-with-map-right' && (
              <div className="w-full h-full flex items-center justify-between px-8 md:px-16 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 flex items-center justify-start h-full pb-8"
                >
                  <VietnamMap className="w-64 h-64 md:w-80 md:h-80" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 flex flex-col justify-center space-y-6 text-white"
                >
                  <div className="space-y-6">
                    <motion.h2
                      className="text-4xl md:text-5xl font-bold drop-shadow-lg"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      {currentPageData.title}
                    </motion.h2>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="text-lg md:text-xl leading-relaxed whitespace-pre-line"
                    >
                      {currentPageData.content}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            )}

            {currentPageData.type === 'content-with-box' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl text-white px-8"
              >
                <motion.h2
                  className="text-5xl md:text-6xl font-bold mb-8 text-yellow-400 drop-shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  {currentPageData.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="bg-red-900 bg-opacity-70 border-2 border-yellow-500 rounded-2xl p-8 text-lg leading-relaxed whitespace-pre-line"
                >
                  {currentPageData.content}
                </motion.div>
              </motion.div>
            )}

            {currentPageData.type === 'content-with-box-large' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full flex items-center justify-center px-8"
              >
                <div className="max-w-3xl text-white">
                  <motion.h2
                    className="text-5xl md:text-6xl font-bold mb-8 text-yellow-400 drop-shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    {currentPageData.title}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="bg-red-900 bg-opacity-70 border-2 border-yellow-500 rounded-2xl p-10 text-lg leading-relaxed whitespace-pre-line"
                  >
                    {currentPageData.content}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-8 text-center text-lg italic text-yellow-300"
                  >
                    Đây là bước phát triển cao hơn về chất của dân chủ trong lịch sử.
                  </motion.div>
                </div>
              </motion.div>
            )}

            {currentPageData.type === 'content-with-box-full' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full flex items-center justify-center px-8"
              >
                <div className="max-w-3xl">
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-8 text-yellow-300 drop-shadow-lg text-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    {currentPageData.title}
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-red-900 bg-opacity-60 border-2 border-red-600 rounded-2xl p-8 text-white text-base leading-relaxed whitespace-pre-line"
                  >
                    {currentPageData.content}
                  </motion.div>

                  {currentPageData.footer && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="mt-8 text-center text-lg italic text-yellow-200"
                    >
                      {currentPageData.footer}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {currentPageData.type === 'conclusion-tabs' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full flex items-center justify-center px-8"
              >
                <div className="max-w-4xl">
                  <motion.h2
                    className="text-5xl md:text-6xl font-bold mb-12 text-yellow-400 drop-shadow-lg text-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    {currentPageData.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-white text-xl mb-8 text-center"
                  >
                    {currentPageData.subtitle1}
                  </motion.p>

                  <div className="flex gap-6 justify-center flex-wrap">
                    {currentPageData.items && currentPageData.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.2, duration: 0.6 }}
                        className="bg-orange-600 rounded-2xl p-8 w-full md:w-auto flex-1 min-w-64 border-2 border-yellow-500"
                      >
                        <div className="text-yellow-300 text-3xl font-bold mb-4">
                          {String.fromCharCode(73 + idx)}.
                        </div>
                        <p className="text-white text-sm leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {currentPageData.type === 'conclusion-card' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full flex items-center justify-center px-8"
              >
                <div className="max-w-3xl w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-orange-600 rounded-3xl p-12 border-4 border-yellow-400 shadow-2xl"
                  >
                    <motion.h2
                      className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      {currentPageData.title}
                    </motion.h2>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="space-y-4"
                    >
                      {currentPageData.items && currentPageData.items.map((item, idx) => (
                        <p key={idx} className="text-white text-lg leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {currentPageData.type === 'content-with-buttons' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full flex items-center justify-center px-8"
              >
                <div className="max-w-3xl">
                  <motion.h2
                    className="text-5xl md:text-6xl font-bold mb-8 text-yellow-400 drop-shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    {currentPageData.title}
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="bg-red-900 bg-opacity-70 border-2 border-yellow-500 rounded-2xl p-8 text-white text-lg leading-relaxed mb-8 whitespace-pre-line"
                  >
                    {currentPageData.content}
                  </motion.div>

                  <div className="flex gap-6 justify-center flex-wrap">
                    {currentPageData.buttons && currentPageData.buttons.map((btn, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border-2 border-yellow-500 text-yellow-400 rounded-full font-semibold hover:bg-yellow-500 hover:text-red-900 transition-all"
                      >
                        {btn}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {currentPageData.type === 'content-with-buttons-center' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full flex flex-col items-center justify-center px-8 md:px-16 space-y-6"
              >
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-yellow-300 drop-shadow-lg text-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  {currentPageData.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-lg text-white text-center max-w-3xl"
                >
                  {currentPageData.content}
                </motion.p>

                <div className="flex flex-col gap-4 w-full max-w-2xl">
                  {currentPageData.buttons && currentPageData.buttons.map((btn, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.15, duration: 0.6 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 border-2 border-red-500 text-white rounded-full font-semibold hover:bg-red-600 hover:border-red-400 transition-all text-center"
                    >
                      {btn}
                    </motion.button>
                  ))}
                </div>

                {currentPageData.footer && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-center text-yellow-200 italic mt-6 pt-6 border-t border-red-500 max-w-3xl"
                  >
                    {currentPageData.footer}
                  </motion.p>
                )}
              </motion.div>
            )}

            {currentPageData.type === 'content-with-buttons-right' && (
              <div className="w-full h-full flex items-center justify-between px-8 md:px-16 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 flex flex-col justify-center space-y-4"
                >
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold text-red-800"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    {currentPageData.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg text-red-700 font-medium italic"
                  >
                    {currentPageData.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-base text-black leading-relaxed whitespace-pre-line"
                  >
                    {currentPageData.content}
                  </motion.div>

                  <div className="flex flex-col gap-4 mt-6">
                    {currentPageData.buttons && currentPageData.buttons.map((btn, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border-2 border-red-700 text-red-700 rounded-full font-semibold hover:bg-red-700 hover:text-white transition-all text-left"
                      >
                        • {btn}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 flex items-center justify-end h-full"
                >
                  {currentPageData.hasMap && <VietnamMap className="w-64 h-64 md:w-80 md:h-80" />}
                </motion.div>
              </div>
            )}

            {currentPageData.type === 'content-with-cards' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full flex items-center justify-center px-8"
              >
                <div className="max-w-5xl">
                  <motion.h2
                    className="text-5xl md:text-6xl font-bold mb-4 text-red-800 drop-shadow-lg text-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    {currentPageData.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-black text-lg mb-8 text-center font-medium"
                  >
                    {currentPageData.subtitle}
                  </motion.p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {currentPageData.cards && currentPageData.cards.map((card, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.2, duration: 0.6 }}
                        className="bg-red-800 rounded-2xl p-6 border-2 border-red-600 text-white hover:shadow-2xl transition-all"
                      >
                        <h3 className="text-xl font-bold mb-4 text-yellow-300">
                          {card.title}
                        </h3>
                        <p className="text-sm leading-relaxed">
                          {card.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {(currentPageData.type === 'content' || currentPageData.type === 'closing') && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl space-y-6 text-white"
              >
                <motion.h2
                  className="text-4xl md:text-5xl font-bold drop-shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  {currentPageData.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-xl md:text-2xl font-semibold"
                >
                  {currentPageData.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-base md:text-lg leading-relaxed whitespace-pre-line"
                >
                  {currentPageData.content}
                </motion.div>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
          >
            <p className="text-sm md:text-base font-semibold">
              {currentPage + 1} / {pages.length}
            </p>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-white"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between pointer-events-none z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          disabled={currentPage === 0}
          className={`pointer-events-auto ml-4 p-3 rounded-full transition-all ${
            currentPage === 0
              ? 'bg-gray-600 opacity-50 cursor-not-allowed'
              : 'bg-white hover:bg-gray-200 cursor-pointer'
          }`}
        >
          <ChevronUp size={24} className="text-black" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={currentPage === pages.length - 1}
          className={`pointer-events-auto mr-4 p-3 rounded-full transition-all ${
            currentPage === pages.length - 1
              ? 'bg-gray-600 opacity-50 cursor-not-allowed'
              : 'bg-white hover:bg-gray-200 cursor-pointer'
          }`}
        >
          <ChevronDown size={24} className="text-black" />
        </motion.button>
      </div>

      {currentPage < pages.length - 1 && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ChevronDown size={32} />
        </motion.div>
      )}
    </div>
  );
};

export default Magazine;
