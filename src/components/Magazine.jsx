import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, X, ArrowRight } from 'lucide-react';
import { VietnamMap, Mandala, VietnamFlag, DocumentIcon, HammerSickle, BookIcon } from './SVGElements';

// Modal content for the 3 buttons on slide 3 (Dân chủ là gì theo quan điểm khoa học?)
const modalContentsSlide3 = [
  {
    title: 'Trình độ phát triển kinh tế',
    content: `Trình độ phát triển kinh tế là cơ sở vật chất trực tiếp để thực hiện dân chủ trong xã hội. Khi nền kinh tế phát triển, của cải xã hội được tạo ra nhiều hơn, nhà nước và xã hội mới có điều kiện bảo đảm các quyền dân chủ của nhân dân trên thực tế, chứ không chỉ trên danh nghĩa.

Ngược lại, trong điều kiện kinh tế lạc hậu, nghèo nàn, các quyền dân chủ dễ bị hạn chế hoặc chỉ tồn tại dưới hình thức hình thức. Do đó, theo Chủ nghĩa Mác – Lênin, dân chủ không thể tách rời sự phát triển của lực lượng sản xuất và nền tảng kinh tế của xã hội.`,
    buttonText: 'Trình độ phát triển kinh tế'
  },
  {
    title: 'Cơ cấu giai cấp trong xã hội',
    content: `Trong xã hội có giai cấp, dân chủ luôn mang bản chất giai cấp. Quyền lực chính trị và quyền lực xã hội trên thực tế thuộc về giai cấp nào thì dân chủ trước hết phản ánh lợi ích của giai cấp đó.

Theo quan điểm Mác – Lênin, trong xã hội tư bản chủ nghĩa, dù tồn tại nhiều hình thức dân chủ, quyền lực thực tế vẫn chủ yếu nằm trong tay giai cấp tư sản. Ngược lại, trong xã hội xã hội chủ nghĩa, dân chủ hướng tới việc bảo đảm quyền làm chủ của giai cấp công nhân, nhân dân lao động và toàn thể nhân dân.

Vì vậy, không có nền dân chủ "phi giai cấp", mà mỗi hình thức dân chủ đều gắn với tương quan lực lượng giai cấp cụ thể trong xã hội.`,
    buttonText: 'Cơ cấu giai cấp'
  },
  {
    title: 'Quan hệ sản xuất đang tồn tại',
    content: `Quan hệ sản xuất, đặc biệt là quan hệ sở hữu đối với tư liệu sản xuất, có vai trò quyết định phạm vi và nội dung của dân chủ. Khi tư liệu sản xuất tập trung trong tay thiểu số, quyền lực kinh tế và quyền lực chính trị cũng dễ bị tập trung, làm hạn chế dân chủ của đại đa số nhân dân.

Theo Chủ nghĩa Mác – Lênin, việc xây dựng quan hệ sản xuất xã hội chủ nghĩa – trong đó tư liệu sản xuất chủ yếu thuộc về toàn xã hội – là điều kiện quan trọng để mở rộng và bảo đảm dân chủ thực chất, gắn quyền lực chính trị với quyền lực kinh tế của nhân dân.`,
    buttonText: 'Quan hệ sản xuất trong xã hội'
  }
];

// Modal content for the 3 buttons on slide 11 (SỰ RA ĐỜI CỦA DÂN CHỦ XÃ HỘI CHỦ NGHĨA)
const modalContentsSlide11 = [
  {
    title: 'QUYỀN LỰC THỰC SỰ THUỘC VỀ NHÂN DÂN LAO ĐỘNG',
    content: `Theo Chủ nghĩa xã hội khoa học, dân chủ xã hội chủ nghĩa trước hết được xác định bởi quyền lực thực sự của nhân dân lao động.

Khác với các hình thức dân chủ trước đó, nơi quyền lực chính trị thường bị chi phối bởi các nhóm lợi ích kinh tế, dân chủ xã hội chủ nghĩa hướng tới việc bảo đảm để nhân dân lao động trực tiếp tham gia vào quá trình quyết định các vấn đề chính trị – xã hội, đặc biệt là những vấn đề liên quan đến quyền lực kinh tế và quyền lực xã hội.

Quyền lực của nhân dân không chỉ được thừa nhận về mặt pháp lý, mà còn được tổ chức và bảo đảm thông qua các thiết chế chính trị – xã hội như các hội đồng nhân dân, các tổ chức xã hội, và các hình thức khác của dân chủ xã hội chủ nghĩa để nhân dân lao động thực sự làm chủ.`,
    buttonText: 'Quyền lực thực sự thuộc về nhân dân lao động'
  },
  {
    title: 'QUYỀN LÀM CHỦ VỀ KINH TẾ VÀ XÃ HỘI',
    content: `Trong dân chủ xã hội chủ nghĩa, nhân dân không chỉ có quyền chính trị hình thức, mà còn có quyền làm chủ về kinh tế và xã hội.

Điều này có nghĩa là nhân dân được tham gia vào quá trình quản lý, giám sát và quyết định các vấn đề kinh tế – xã hội liên quan đến đời sống của mình. Quyền sở hữu tư liệu sản xuất thuộc về toàn dân, được Nhà nước đại diện quản lý, nhằm phục vụ lợi ích chung của xã hội.

Nhân dân có quyền tham gia xây dựng và thực hiện các kế hoạch phát triển kinh tế, các chính sách an sinh xã hội, đồng thời được hưởng thành quả lao động một cách công bằng. Đây là sự khác biệt căn bản so với dân chủ tư sản, nơi quyền lực kinh tế tập trung trong tay thiểu số.`,
    buttonText: 'Nhân dân không chỉ có quyền chính trị hình thức'
  },
  {
    title: 'DÂN CHỦ GẮN LIỀN VỚI CÔNG BẰNG XÃ HỘI',
    content: `Dân chủ xã hội chủ nghĩa không tách rời khỏi công bằng xã hội. Theo Chủ nghĩa Mác – Lênin, dân chủ thực sự chỉ có thể đạt được khi gắn liền với việc xóa bỏ bất bình đẳng và bóc lột.

Trong xã hội xã hội chủ nghĩa, công bằng xã hội được thể hiện qua việc:
• Mọi người đều có cơ hội bình đẳng trong tiếp cận giáo dục, y tế, việc làm
• Phân phối theo lao động, ai làm nhiều hưởng nhiều
• Hệ thống an sinh xã hội bảo đảm cho những người yếu thế
• Thu hẹp khoảng cách giàu nghèo, giảm bất bình đẳng

Công bằng xã hội là nền tảng để dân chủ được thực hiện một cách thực chất, không chỉ trên giấy tờ mà trong đời sống hàng ngày của nhân dân.`,
    buttonText: 'Dân chủ gắn liền với công bằng xã hội'
  }
];

// Modal content for the 3 cards on slide 13 (KHÔNG CÓ DÂN CHỦ NẾU KHÔNG ĐI THEO CHỦ NGHĨA TỰ BẢN?)
const modalContentsSlide13 = [
  {
    title: 'Đồng nhất dân chủ với một mô hình duy nhất',
    content: `Nhận định cho rằng dân chủ chỉ có tồn tại trong khuôn khổ của chủ nghĩa tự bản chứa đó có nhiều điểm bất cập và những điều kiện lịch sử, xã hội của chủ được xây dựng. Cách tiếp cận này bỏ sót quan trọng một bản chất: dân chủ khởi những điều kiện lịch sử cụ thể của nó, với tính đa dạng và độc lập. Khi đó, dân chủ không còn được nhận nhận như một phạm trù lịch sử sắn có sẵn, mà là sản phẩm của quá trình phát triển của các xã hội cụ thể.

Theo Chủ nghĩa xã hội khoa học, dân chủ không phải là sản phẩm riêng của chủ nghĩa tự bản, mà là kết quả của quá trình phát triển lịch sử lâu dài, gắn liền với trình độ phát triển kinh tế, cơ cấu giai cấp và quan hệ sản xuất của xã hội. Trong lịch sử, sự ton tại của những hình thức dân chủ khác nhau phản ánh bản chất giai cấp của quyền lực nhà nước, đồng thời cũng phát triển theo mức độ phát triển của xã hội.`,
    buttonText: 'Chi tiết'
  },
  {
    title: 'Bỏ qua bản chất giai cấp của dân chủ',
    content: `Quan điểm phủ nhân dân chủ ở Việt Nam thường liên kết với khái niệm "nước phương tây" lại lịch giai cấp. Tuy nhiên, theo Chủ nghĩa xã hội khoa học, dân chủ luôn mang bản chất giai cấp, được sản xuất nhất định. Lịch sử cho thấy, mô hình thực dân chủ trên thực tế là đắm liên với hợp định hành động chính trị phía bộ phận được chính sách làm chủ của giai cấp nhất định. Những về thực chất văn là dân chủ của giai cấp tư sản, bởi quyền lực thực sự nằm trong tay các nhà tư bản, dù hình thức có vẻ công cộng và bình đẳng.

Trong bối cảnh Việt Nam, dân chủ xã hội chủ nghĩa được xây dựng trên cơ sở dân chủ cho nhân dân được nhân dân lao động chủ yếu, được quy định trong lịch sử để thực hiện bình đẳng về chất lẫn về hình thức với quan đảm nhân dân lao động và cải thiện điều kiện sống được các quiết định chính trị và phát triển kinh tế.`,
    buttonText: 'Chi tiết'
  },
  {
    title: 'Không đặt dân chủ trong tiến trình lịch sử cụ thể',
    content: `Một hạn chế cơ bản của nhân định phủ nhân dân chủ xã hội chủ nghĩa là xem dân chủ như một phạm trù trừu tượng, ngủi lập lực lác, thay vì đặt nó trong tiến trình lịch sự cụ thể. Theo Chủ nghĩa Mác – Lênin, dân chủ là một phạm trù lịch sử, luôn động và biến đổi cùng với sự phát triển của xã hội. Không tồn tại một mô hình dân chủ chung, bất biến cho mọi thời đại mọi quốc gia, mà là một quá trình lâu dài, tương ứng với điều kiện cụ thể của mỗi xã hội.

Trong bối cảnh Việt Nam, dân chủ xã hội chủ nghĩa được xây dựng trong những điều kiện lịch sử đặc thù, với xuất phát điểm kinh tế lạc hậu, nền độc lập chủ quyền bị xâm chiếm nhiều thế kỷ, và sự phân chia giai cấp sâu sắc. Việc mở rộng và hoàn thiện dân chủ không thể diễn ra một quá trình lâu dài, tương ứng với sự phát triển kinh tế – xã hội của đất nước. Những số sánh giới hạn, tách rời bối cảnh lịch sử cụ thể đó, vị là phi lịch sử và không khoa học về sự phát triển của dân chủ .`,
    buttonText: 'Chi tiết'
  }
];

// Modal content for the 3 buttons on slide 12 (VIỆT NAM LỰA CHỌN CON ĐƯỜNG XÃ HỘI CHỦ NGHĨA)
const modalContentsSlide12 = [
  {
    title: 'Quyền làm chủ của nhân dân',
    content: `Trong dân chủ xã hội chủ nghĩa, quyền làm chủ của nhân dân là nội dung cốt lõi và xuyên suốt. Nhân dân không chỉ là đối tượng được quản lý mà là chủ thể của quyền lực nhà nước và quyền lực xã hội. Quyền làm chủ này được thể hiện thông qua việc nhân dân tham gia quyết định những vấn đề quan trọng của đất nước, đồng thời được bảo đảm các quyền và lợi ích chính đáng trong đời sống kinh tế, chính trị, văn hóa và xã hội.

Theo Chủ nghĩa Mác – Lênin, quyền làm chủ của nhân dân không chỉ dừng lại ở việc bầu cử hay ứng cử, mà còn được thể hiện trong toàn bộ quá trình quản lý xã hội, từ việc xây dựng chính sách, pháp luật đến việc thực hiện và giám sát các quyết định đó. Đây là sự khác biệt căn bản so với dân chủ tư sản, nơi quyền lực thực tế thường tập trung trong tay thiểu số.`,
    buttonText: 'Quyền'
  },
  {
    title: 'Nhà nước của nhân dân, do nhân dân, vì nhân dân',
    content: `Nhà nước xã hội chủ nghĩa Việt Nam được xây dựng trên nguyên tắc quyền lực nhà nước thuộc về nhân dân. Nhà nước do nhân dân lập nên, đại diện cho ý chí và lợi ích của nhân dân, hoạt động vì mục tiêu phục vụ nhân dân. Mọi đường lối, chính sách và hoạt động quản lý xã hội đều hướng tới bảo đảm quyền lợi của đa số nhân dân, gắn trách nhiệm của bộ máy nhà nước với sự giám sát của xã hội.

Theo lý luận Hồ Chí Minh, nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là nhà nước của dân, do dân và vì dân. Điều này có nghĩa là nhân dân là chủ thể tối cao của quyền lực nhà nước, mọi quyền lực đều xuất phát từ nhân dân và phục vụ lợi ích của nhân dân. Nhà nước không phải là một thực thể đứng trên nhân dân, mà là công cụ để nhân dân thực hiện quyền làm chủ của mình.`,
    buttonText: 'Nhà nước'
  },
  {
    title: 'Sự tham gia của nhân dân vào quản lý xã hội',
    content: `Dân chủ xã hội chủ nghĩa không chỉ được thể hiện ở quyền bầu cử hay ứng cử, mà còn ở sự tham gia thường xuyên của nhân dân vào quản lý xã hội. Nhân dân có quyền đóng góp ý kiến, phản biện, giám sát hoạt động của các cơ quan nhà nước và các tổ chức xã hội. Thông qua sự tham gia đó, dân chủ được thực hiện một cách thực chất, gắn quyền với trách nhiệm và góp phần nâng cao hiệu quả quản lý xã hội.

Theo quan điểm của Chủ nghĩa Mác – Lênin, sự tham gia của nhân dân vào quản lý xã hội được thể hiện qua nhiều hình thức: tham gia vào các tổ chức chính trị - xã hội, tham gia xây dựng và thực hiện các chính sách, pháp luật, tham gia giám sát hoạt động của các cơ quan nhà nước, và tham gia vào các hoạt động tự quản ở cơ sở. Đây là cách thức để nhân dân thực sự làm chủ, không chỉ trên danh nghĩa mà trong thực tế.`,
    buttonText: 'Sự tham gia'
  }
];

// Modal content for the 3 buttons on the last slide (DÂN CHỦ TRONG ĐỜI SỐNG THỰC TIỄN)
const modalContents = [
  {
    title: 'BẢO ĐẢM CÁC QUYỀN CƠ BẢN CỦA NGƯỜI DÂN TRONG ĐỜI SỐNG XÃ HỘI',
    content: `Dân chủ xã hội chủ nghĩa được thể hiện trước hết thông qua việc bảo đảm các quyền cơ bản của người dân trong đời sống xã hội, coi đây là nền tảng để thực hiện quyền làm chủ một cách thực chất. Theo quan điểm của Chủ nghĩa Mác – Lênin, dân chủ không chỉ dừng lại ở việc ghi nhận các quyền trên phương diện pháp lý, mà phải được bảo đảm bằng những điều kiện vật chất và xã hội cụ thể. Vì vậy, quyền tiếp cận giáo dục, y tế, khoa học và công nghệ, cùng với các dịch vụ công thiết yếu, có ý nghĩa quyết định trong việc tạo ra sự bình đẳng về cơ hội cho mọi công dân. Ở Việt Nam, việc Nhà nước giữ vai trò chủ đạo trong phát triển giáo dục, chăm sóc sức khỏe nhân dân và bảo đảm an sinh xã hội thể hiện rõ định hướng lấy con người làm trung tâm của dân chủ xã hội chủ nghĩa, qua đó góp phần nâng cao dân trí, cải thiện đời sống vật chất và tinh thần, thu hẹp khoảng cách xã hội và hiện thực hóa quyền làm chủ của nhân dân không chỉ trong lĩnh vực chính trị mà trong toàn bộ đời sống kinh tế, xã hội.`,
    buttonText: 'Nhân dân làm chủ'
  },
  {
    title: 'SỰ THAM GIA CỦA NHÂN DÂN VÀO QUẢN LÝ VÀ GIÁM SÁT XÃ HỘI',
    content: `Bên cạnh đó, dân chủ xã hội chủ nghĩa còn được thể hiện thông qua sự tham gia của nhân dân vào quản lý và giám sát các hoạt động của xã hội và nhà nước. Theo quan điểm của Chủ nghĩa Mác – Lênin, quyền làm chủ của nhân dân không chỉ dừng lại ở việc thụ hưởng các chính sách, mà còn được hiện thực hóa thông qua sự tham gia trực tiếp và gián tiếp của người dân vào quá trình xây dựng, thực hiện và kiểm tra các quyết định liên quan đến lợi ích chung. Thông qua các cơ chế như góp ý kiến, phản ánh nguyện vọng, tham gia các tổ chức chính trị, xã hội và hoạt động cộng đồng, nhân dân có điều kiện phát huy vai trò chủ thể của mình, góp phần bảo đảm các chính sách, pháp luật phù hợp với thực tiễn đời sống và đáp ứng lợi ích chính đáng của nhân dân.`,
    buttonText: 'Quyền lực thuộc về dân'
  },
  {
    title: 'THỤ HƯỞNG THÀNH QUẢ PHÁT TRIỂN VÀ BẢO ĐẢM CÔNG BẰNG XÃ HỘI',
    content: `Đồng thời, dân chủ xã hội chủ nghĩa gắn liền với việc nhân dân được thụ hưởng một cách công bằng và ngày càng đầy đủ các thành quả của quá trình phát triển kinh tế, xã hội. Theo quan điểm của Chủ nghĩa Mác – Lênin, quyền làm chủ của nhân dân chỉ thực sự có ý nghĩa khi được thể hiện trong đời sống vật chất và tinh thần cụ thể của con người. Vì vậy, việc không ngừng nâng cao mức sống, cải thiện điều kiện lao động, mở rộng hệ thống an sinh xã hội và bảo đảm công bằng xã hội là những biểu hiện trực tiếp và sinh động của dân chủ xã hội chủ nghĩa trong thực tiễn. Thông qua việc phân phối hợp lý thành quả phát triển, gắn tăng trưởng kinh tế với tiến bộ và công bằng xã hội, quyền làm chủ của nhân dân được hiện thực hóa không chỉ trên phương diện chính trị, mà còn trong toàn bộ đời sống kinh tế và xã hội.`,
    buttonText: 'Thực hành quyền làm chủ'
  }
];

const Magazine = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // { type: 'slide11' | 'lastSlide', index: number }

  // Helper to get modal content based on type
  const getModalContent = () => {
    if (!activeModal) return null;
    if (activeModal.type === 'slide3') {
      return modalContentsSlide3[activeModal.index];
    }
    if (activeModal.type === 'slide11') {
      return modalContentsSlide11[activeModal.index];
    }
    if (activeModal.type === 'slide12') {
      return modalContentsSlide12[activeModal.index];
    }
    if (activeModal.type === 'slide13') {
      return modalContentsSlide13[activeModal.index];
    }
    return modalContents[activeModal.index];
  };

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
      content: `Theo Chủ nghĩa Mác – Lênin, dân chủ là một hình thức tổ chức quyền lực xã hội, trong đó nhân dân giữ vị trí chủ thể của quyền lực nhà nước và quyền lực xã hội. Dân chủ không tồn tại như một khái niệm trừu tượng, phi lịch sử, mà luôn gắn liền với:`,
      buttons: ['Trình độ phát triển kinh tế', 'Cơ cấu giai cấp', 'Quan hệ sản xuất trong xã hội'],
      footer: 'Vì vậy, không tồn tại một mô hình dân chủ chung cho mọi thời đại và mọi quốc gia.',
      type: 'content-with-3-buttons-diagram',
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
      buttons: ['Quyền', 'Nhà nước', 'Sự tham gia'],
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
          description: 'Chi tiết'
        },
        {
          title: 'Bỏ qua bản chất giai cấp của dân chủ',
          description: 'Chi tiết'
        },
        {
          title: 'Không đặt dân chủ trong tiến trình lịch sử cụ thể',
          description: 'Chi tiết'
        }
      ],
      type: 'content-with-cards',
      bgGradient: 'from-red-100 via-red-50 to-red-100',
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
    {
      id: 18,
      title: 'PHỤ LỤC',
      subtitle: 'Tài liệu tham khảo và biểu tượng lịch sử',
      items: [
        'Chủ nghĩa Mác – Lênin về dân chủ và nhà nước',
        'Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam',
        'Văn kiện Đại hội Đảng Cộng sản Việt Nam',
        'Lý luận Hồ Chí Minh về dân chủ xã hội chủ nghĩa',
        'Các văn bản pháp luật về quyền công dân và dân chủ',
        'Nghiên cứu về dân chủ trong thời đại hiện đại'
      ],
      type: 'appendix',
      bgGradient: 'from-red-800 to-red-900',
    },
    {
      id: 19,
      title: 'KẾT LUẬN',
      subtitle: 'Dân chủ xã hội chủ nghĩa - Con đường phát triển của Việt Nam',
      content: `Dân chủ không phải là sản phẩm độc quyền của chủ nghĩa tư bản, mà là giá trị phổ quát của nhân loại, được phát triển và hoàn thiện qua các giai đoạn lịch sử khác nhau.

Việt Nam đã lựa chọn con đường xây dựng dân chủ xã hội chủ nghĩa phù hợp với điều kiện lịch sử, văn hóa và trình độ phát triển của đất nước. Đây là một quá trình lâu dài, không ngừng được hoàn thiện và phát triển.

Dân chủ xã hội chủ nghĩa ở Việt Nam được thể hiện qua việc nhân dân thực sự làm chủ, tham gia vào quản lý nhà nước và xã hội, được hưởng các quyền cơ bản và thụ hưởng thành quả phát triển một cách công bằng.

Con đường phát triển dân chủ của Việt Nam là một phần không thể tách rời của quá trình xây dựng và phát triển đất nước theo định hướng xã hội chủ nghĩa.`,
      type: 'conclusion',
      bgGradient: 'from-red-700 via-red-600 to-amber-100',
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
    if (scrollLocked) return;
    
    // Tìm element có thể scroll được từ target và các parent elements
    let element = e.target;
    let scrollableElement = null;
    
    // Kiểm tra từ target lên đến root để tìm element có scroll
    while (element && element !== document.body) {
      const style = window.getComputedStyle(element);
      const hasOverflowY = style.overflowY === 'auto' || style.overflowY === 'scroll';
      const canScroll = element.scrollHeight > element.clientHeight;
      
      if (hasOverflowY && canScroll) {
        scrollableElement = element;
        break;
      }
      
      element = element.parentElement;
    }
    
    if (scrollableElement) {
      // Kiểm tra xem element có thể scroll được không
      const scrollTop = scrollableElement.scrollTop;
      const scrollHeight = scrollableElement.scrollHeight;
      const clientHeight = scrollableElement.clientHeight;
      const threshold = 1; // Ngưỡng để xác định đã scroll đến đầu/cuối
      
      const canScrollUp = scrollTop > threshold;
      const canScrollDown = scrollTop < (scrollHeight - clientHeight - threshold);
      
      // Nếu đang cuộn xuống và có thể scroll xuống, cho phép scroll
      if (e.deltaY > 0 && canScrollDown) {
        return; // Cho phép scroll bình thường
      }
      
      // Nếu đang cuộn lên và có thể scroll lên, cho phép scroll
      if (e.deltaY < 0 && canScrollUp) {
        return; // Cho phép scroll bình thường
      }
      
      // Nếu đã scroll đến đầu/cuối, mới chuyển trang
      if (e.deltaY > 50 && !canScrollDown) {
        e.preventDefault();
        handleNext();
        return;
      }
      
      if (e.deltaY < -50 && !canScrollUp) {
        e.preventDefault();
        handlePrev();
        return;
      }
      
      // Nếu đang ở giữa scroll, cho phép scroll tiếp
      return;
    }
    
    // Nếu không có element scrollable, chuyển trang như bình thường
    e.preventDefault();
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
    <div 
      className="relative w-full h-screen overflow-hidden bg-black" 
      onWheel={handleWheel}
      style={{ touchAction: 'pan-y' }}
    >
      <AnimatePresence initial={false} custom={currentPage} mode="wait">
        <motion.div
          key={currentPage}
          custom={currentPage}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={pageTransition}
          className={`absolute inset-0 w-full h-screen bg-gradient-to-r ${currentPageData.bgGradient} flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden`}
        >
          <div className="w-full h-full flex items-center justify-center relative z-10">
            {currentPageData.type === 'cover' && (
              <div className="w-full h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 gap-4 md:gap-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 flex flex-col items-center justify-center"
                >
                  <div className="mb-4 md:mb-8">
                    <VietnamMap className="w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56" />
                  </div>
                  <motion.div
                    className="text-center space-y-2 md:space-y-3"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-2xl px-2" style={{textShadow: '0 4px 8px rgba(180, 20, 20, 0.8)'}}>
                      {currentPageData.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-2xl px-2" style={{textShadow: '0 3px 6px rgba(180, 20, 20, 0.8)'}}>
                      {currentPageData.subtitle}
                    </p>
                    <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-2xl px-2" style={{textShadow: '0 3px 6px rgba(180, 20, 20, 0.8)'}}>
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
              <div className="w-full h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 gap-4 md:gap-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 flex flex-col justify-center space-y-6"
                >
                  <div className="space-y-2 md:space-y-4 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-red-800">
                      {currentPageData.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-medium max-w-md">
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
                  className="flex-1 flex items-center md:items-end justify-center md:justify-end h-full pb-4 md:pb-8"
                >
                  <VietnamMap className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" />
                </motion.div>
              </div>
            )}

            {currentPageData.type === 'content-with-map-right' && (
              <div className="w-full h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 gap-4 md:gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 flex items-center justify-center md:justify-start h-full pb-4 md:pb-8"
                >
                  <VietnamMap className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 flex flex-col justify-center space-y-6 text-white"
                >
                  <div className="space-y-6">
                    <motion.h2
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg text-center md:text-left"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      {currentPageData.title}
                    </motion.h2>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed whitespace-pre-line text-center md:text-left"
                    >
                      {currentPageData.content}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            )}

            {currentPageData.type === 'content-with-3-buttons-diagram' && (
              <div className="w-full h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 gap-4 md:gap-8">
                {/* Vietnam Map on the left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 flex items-center justify-center md:justify-start h-full"
                >
                  <VietnamMap className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" />
                </motion.div>

                {/* Content on the right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 flex flex-col justify-center space-y-6"
                >
                  {/* Title with decorative border */}
                  <div className="relative">
                    <motion.div
                      className="border-2 border-dashed border-yellow-500 rounded-lg p-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.h2
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 text-center"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        {currentPageData.title}
                      </motion.h2>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center italic"
                  >
                    {currentPageData.content}
                  </motion.p>

                  {/* 3 Buttons in diagram layout */}
                  <div className="flex flex-col items-center gap-3 md:gap-4">
                    {/* Top row - 2 buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center w-full">
                      {currentPageData.buttons && currentPageData.buttons.slice(0, 2).map((btn, idx) => (
                        <motion.button
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + idx * 0.15, duration: 0.6 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setActiveModal({ type: 'slide3', index: idx })}
                          className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-yellow-500 text-yellow-400 rounded-full font-semibold hover:bg-yellow-500 hover:text-red-900 transition-all cursor-pointer text-xs sm:text-sm md:text-base w-full sm:w-auto"
                        >
                          • {btn}
                        </motion.button>
                      ))}
                    </div>

                    {/* Bottom row - 1 button centered */}
                    {currentPageData.buttons && currentPageData.buttons[2] && (
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveModal({ type: 'slide3', index: 2 })}
                        className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-yellow-500 text-yellow-400 rounded-full font-semibold hover:bg-yellow-500 hover:text-red-900 transition-all cursor-pointer text-xs sm:text-sm md:text-base w-full sm:w-auto"
                      >
                        • {currentPageData.buttons[2]}
                      </motion.button>
                    )}
                  </div>

                  {/* Footer text */}
                  {currentPageData.footer && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      className="bg-red-900/60 border border-yellow-600/50 rounded-2xl p-4 mt-2"
                    >
                      <p className="text-white text-sm md:text-base text-center italic">
                        {currentPageData.footer}
                      </p>
                    </motion.div>
                  )}
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
                  className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 text-yellow-400 drop-shadow-lg text-center px-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  {currentPageData.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="bg-red-900 bg-opacity-70 border-2 border-yellow-500 rounded-2xl p-4 sm:p-6 md:p-8 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line"
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
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-yellow-300 drop-shadow-lg text-center px-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    {currentPageData.title}
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-red-900 bg-opacity-60 border-2 border-red-600 rounded-2xl p-4 sm:p-6 md:p-8 text-white text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line"
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
                className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8"
              >
                <div className="max-w-3xl w-full">
                  <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-yellow-400 drop-shadow-lg text-center px-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    {currentPageData.title}
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="bg-red-900 bg-opacity-70 border-2 border-yellow-500 rounded-2xl p-4 sm:p-6 md:p-8 text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8 whitespace-pre-line"
                  >
                    {currentPageData.content}
                  </motion.div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-stretch sm:items-center flex-wrap">
                    {currentPageData.buttons && currentPageData.buttons.map((btn, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          // Kiểm tra nếu là trang id 12 thì mở modal slide12
                          if (currentPageData.id === 12) {
                            setActiveModal({ type: 'slide12', index: idx });
                          }
                        }}
                        className="px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 border-2 border-yellow-500 text-yellow-400 rounded-full font-semibold hover:bg-yellow-500 hover:text-red-900 transition-all text-xs sm:text-sm md:text-base w-full sm:w-auto cursor-pointer"
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
                className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 space-y-4 sm:space-y-5 md:space-y-6"
              >
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-300 drop-shadow-lg text-center px-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  {currentPageData.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-white text-center max-w-3xl px-2"
                >
                  {currentPageData.content}
                </motion.p>

                <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-2xl px-2">
                  {currentPageData.buttons && currentPageData.buttons.map((btn, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.15, duration: 0.6 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveModal({ type: 'slide11', index: idx })}
                      className="px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 border-2 border-red-500 text-white rounded-full font-semibold hover:bg-red-600 hover:border-red-400 transition-all text-center cursor-pointer text-xs sm:text-sm md:text-base"
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
              <div className="w-full h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 gap-4 md:gap-8 overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 flex flex-col justify-center space-y-3 md:space-y-4 w-full"
                >
                  <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-800 break-words"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    {currentPageData.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-sm sm:text-base md:text-lg text-red-700 font-medium italic break-words"
                  >
                    {currentPageData.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xs sm:text-sm md:text-base text-black leading-relaxed whitespace-pre-line break-words"
                  >
                    {currentPageData.content}
                  </motion.div>

                  <div className="flex flex-col gap-3 md:gap-4 mt-4 md:mt-6">
                    {currentPageData.buttons && currentPageData.buttons.map((btn, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveModal({ type: 'lastSlide', index: idx })}
                        className="px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 border-2 border-red-700 text-red-700 rounded-full font-semibold hover:bg-red-700 hover:text-white transition-all text-left cursor-pointer text-xs sm:text-sm md:text-base w-full sm:w-auto"
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
                  className="flex-1 flex items-center justify-center md:justify-end h-full w-full md:w-auto"
                >
                  {currentPageData.hasMap && <VietnamMap className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" />}
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
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 text-red-800 drop-shadow-lg text-center px-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    {currentPageData.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-black text-sm sm:text-base md:text-lg mb-4 md:mb-8 text-center font-medium px-2"
                  >
                    {currentPageData.subtitle}
                  </motion.p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {currentPageData.cards && currentPageData.cards.map((card, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setActiveModal({ type: 'slide13', index: idx })}
                        className="bg-red-800 rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-red-600 text-white hover:shadow-2xl transition-all cursor-pointer flex flex-col"
                      >
                        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 md:mb-4 text-yellow-300">
                          {card.title}
                        </h3>
                        <div className="mt-auto pt-3 md:pt-4 flex items-center gap-2 group">
                          <span className="text-xs sm:text-sm text-white font-medium">
                            {card.description}
                          </span>
                          <ArrowRight 
                            size={16} 
                            className="text-white group-hover:translate-x-1 transition-transform flex-shrink-0" 
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {currentPageData.type === 'appendix' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-y-auto"
              >
                <div className="max-w-5xl w-full py-4">
                  <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-yellow-400 drop-shadow-lg text-center break-words px-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    {currentPageData.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-center mb-6 sm:mb-8 md:mb-12 italic px-2 break-words"
                  >
                    {currentPageData.subtitle}
                  </motion.p>

                  {/* Icons row */}
                  <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12 flex-wrap">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="flex flex-col items-center"
                    >
                      <VietnamFlag className="w-20 h-12 sm:w-24 sm:h-16 md:w-32 md:h-20 mb-1 md:mb-2" />
                      <span className="text-white text-xs sm:text-sm">Cờ Tổ quốc</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="flex flex-col items-center"
                    >
                      <DocumentIcon className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 mb-1 md:mb-2" />
                      <span className="text-white text-xs sm:text-sm">Văn kiện</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="flex flex-col items-center"
                    >
                      <HammerSickle className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-1 md:mb-2" />
                      <span className="text-white text-xs sm:text-sm">Biểu tượng</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      className="flex flex-col items-center"
                    >
                      <BookIcon className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 mb-1 md:mb-2" />
                      <span className="text-white text-xs sm:text-sm">Tài liệu</span>
                    </motion.div>
                  </div>

                  {/* Reference list */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="bg-red-900 bg-opacity-60 border-2 border-yellow-500 rounded-2xl p-4 sm:p-6 md:p-8"
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300 mb-4 md:mb-6 text-center">
                      Tài liệu tham khảo
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                      {currentPageData.items && currentPageData.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + idx * 0.1, duration: 0.5 }}
                          className="flex items-start gap-2 md:gap-3 text-white"
                        >
                          <span className="text-yellow-400 font-bold mt-1 flex-shrink-0">•</span>
                          <span className="text-xs sm:text-sm md:text-base leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {currentPageData.type === 'conclusion' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full flex items-center justify-center px-8"
              >
                <div className="max-w-4xl w-full">
                  <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-4 sm:mb-6 md:mb-8 flex-wrap">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <VietnamMap className="w-20 h-30 sm:w-24 sm:h-36 md:w-32 md:h-48" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <VietnamFlag className="w-24 h-16 sm:w-32 sm:h-22 md:w-40 md:h-28" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <Mandala className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" />
                    </motion.div>
                  </div>

                  <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-white drop-shadow-2xl text-center px-2"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    style={{textShadow: '0 4px 8px rgba(0, 0, 0, 0.8)'}}
                  >
                    {currentPageData.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white text-center mb-4 sm:mb-6 md:mb-8 italic px-2"
                    style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)'}}
                  >
                    {currentPageData.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="bg-red-900 bg-opacity-70 border-2 sm:border-3 md:border-4 border-yellow-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed whitespace-pre-line text-justify"
                    >
                      {currentPageData.content}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-4 sm:mt-6 md:mt-8 text-center"
                  >
                    <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
                      <BookIcon className="w-10 h-8 sm:w-12 sm:h-9 md:w-16 md:h-12 text-yellow-300" />
                      <HammerSickle className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-yellow-300" />
                      <DocumentIcon className="w-8 h-10 sm:w-10 sm:h-12 md:w-12 md:h-14 text-yellow-300" />
                    </div>
                  </motion.div>
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
            className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white"
          >
            <p className="text-xs sm:text-sm md:text-base font-semibold">
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
          className={`pointer-events-auto ml-2 sm:ml-3 md:ml-4 p-2 sm:p-2.5 md:p-3 rounded-full transition-all ${
            currentPage === 0
              ? 'bg-gray-600 opacity-50 cursor-not-allowed'
              : 'bg-white hover:bg-gray-200 cursor-pointer'
          }`}
        >
          <ChevronUp size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={currentPage === pages.length - 1}
          className={`pointer-events-auto mr-2 sm:mr-3 md:mr-4 p-2 sm:p-2.5 md:p-3 rounded-full transition-all ${
            currentPage === pages.length - 1
              ? 'bg-gray-600 opacity-50 cursor-not-allowed'
              : 'bg-white hover:bg-gray-200 cursor-pointer'
          }`}
        >
          <ChevronDown size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
        </motion.button>
      </div>

      {currentPage < pages.length - 1 && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ChevronDown size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </motion.div>
      )}

      {/* Modal for displaying detailed content */}
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4"
            onClick={() => setActiveModal(null)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.4, type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden mx-2"
            >
              {/* Background with Vietnam map silhouette */}
              <div className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-3xl overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-30">
                  <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                    <path d="M10 20 Q20 10 30 20 Q40 30 50 20 Q60 10 70 20" stroke="#DAA520" strokeWidth="2" fill="none"/>
                    <path d="M10 25 Q20 15 30 25 Q40 35 50 25 Q60 15 70 25" stroke="#DAA520" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 opacity-30">
                  <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                    <path d="M10 20 Q20 10 30 20 Q40 30 50 20 Q60 10 70 20" stroke="#DAA520" strokeWidth="2" fill="none"/>
                    <path d="M10 25 Q20 15 30 25 Q40 35 50 25 Q60 15 70 25" stroke="#DAA520" strokeWidth="2" fill="none"/>
                  </svg>
                </div>

                {/* Vietnam map in background */}
                <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-20 flex items-center">
                  <VietnamMap className="w-full h-auto" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 overflow-y-auto max-h-[95vh] sm:max-h-[90vh]">
                  {/* Close button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveModal(null)}
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 p-1.5 sm:p-2 rounded-full bg-red-700/50 hover:bg-red-600 transition-colors z-20"
                  >
                    <X size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </motion.button>

                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 mb-3 sm:mb-4 md:mb-6 pr-8 sm:pr-10 md:pr-12 leading-tight"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                  >
                    {getModalContent()?.title}
                  </motion.h2>

                  {/* Content Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-red-950/60 border-2 border-yellow-600/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 mb-4 sm:mb-5 md:mb-6"
                  >
                    <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed text-justify whitespace-pre-line">
                      {getModalContent()?.content}
                    </p>
                  </motion.div>

                  {/* Footer Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-end"
                  >
                    <button
                      onClick={() => setActiveModal(null)}
                      className="px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 bg-red-950/80 border-2 border-yellow-600/70 text-yellow-400 rounded-full font-semibold hover:bg-red-800 hover:border-yellow-500 transition-all text-xs sm:text-sm md:text-base"
                    >
                      {getModalContent()?.buttonText}
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Magazine;
