import React, { useState } from 'react';
import {
    Briefcase,
    GraduationCap,
    TerminalSquare,
    TrendingUp,
    Workflow,
    Sparkles,
    ChevronDown,
    ChevronUp,
    ShieldCheck,
    Users,
    Building2
} from 'lucide-react';

// 透過 Vite 的 import 機制引入照片，打包時會自動處理路徑與快取
import photoStella from '../assets/photo_stella.jpg';

// 可折疊的工作經歷卡片元件
const ExpandableExperienceCard = ({ title, company, period, defaultExpanded = false, isHighlight = false, children }) => {
    const [isOpen, setIsOpen] = useState(defaultExpanded);

    return (
        <div className={`bg-white rounded-2xl shadow-sm border transition-all duration-200 ${isOpen ? 'border-[#C6D8C9] shadow-md' : 'border-[#E9ECE9] hover:border-[#C6D8C9] hover:shadow-md'}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-6 py-6 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none rounded-2xl cursor-pointer"
            >
                <div>
                    <h3 className="text-xl font-bold text-[#1E293B]">{title}</h3>
                    <div className="text-lg font-semibold text-[#64748B] mt-1">{company}</div>
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <span className={`inline-flex shrink-0 items-center text-sm font-medium px-4 py-1.5 rounded-full border ${isHighlight || isOpen ? 'text-[#57755C] bg-[#F0F5F1] border-[#DCE8DE]' : 'text-[#64748B] bg-[#F8FAFC] border-[#E2E8F0]'}`}>
                        {period}
                    </span>
                    <div className={`p-1.5 rounded-full transition-colors ${isOpen ? 'bg-[#F0F5F1] text-[#57755C]' : 'bg-[#F8FAFC] text-[#94A3B8]'}`}>
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                </div>
            </button>

            {isOpen && (
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 animate-in fade-in duration-300">
                    <div className="pt-6 border-t border-[#E9ECE9]">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

const StellaResume = () => {
    return (
        <div className="min-h-screen bg-[#FAFCFB] text-[#334155] font-sans selection:bg-[#DCE8DE] selection:text-[#364F3B]">

            {/* ========== START: 頂部簡歷區 (Hero Section) ========== */}
            <header className="bg-white border-b border-[#E9ECE9]">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 md:py-20">
                    {/* 左右並排佈局：左邊文字資訊、右邊個人照片 */}
                    <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
                        {/* 左側：姓名、職稱與標籤 */}
                        <div className="flex flex-col gap-4 flex-1">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight mb-2">
                                巫怡錚 <span className="text-[#57755C] font-medium ml-3 text-3xl md:text-4xl">Stella Wu</span>
                            </h1>
                            <p className="text-xl text-[#64748B] font-medium mb-1">
                                營運統籌 · 專案管理 · 數位行銷與自動化
                            </p>

                            {/* 標籤 */}
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="inline-flex items-center gap-1.5 bg-[#F0F5F1] text-[#364F3B] text-sm font-semibold px-4 py-2 rounded-lg border border-[#DCE8DE]">
                                    <Briefcase size={16} />
                                    10+ 年高階主管支援與專案推動經驗
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-[#F0F5F1] text-[#364F3B] text-sm font-semibold px-4 py-2 rounded-lg border border-[#DCE8DE]">
                                    <Building2 size={16} />
                                    具備醫療生技產業經驗與跨國溝通能力
                                </span>
                            </div>
                        </div>

                        {/* 右側：個人照片（圓形裁切、帶邊框與陰影） */}
                        <div className="shrink-0 overflow-hidden rounded-full border-4 border-[#E9ECE9] shadow-lg" style={{ width: '160px', height: '160px' }}>
                            <img
                                src={photoStella}
                                alt="Stella Wu 巫怡錚"
                                style={{ width: '160px', height: '160px', objectFit: 'cover', objectPosition: 'top' }}
                            />
                        </div>
                    </div>
                </div>
            </header>
            {/* ========== END: 頂部簡歷區 (Hero Section) ========== */}

            <main className="max-w-4xl mx-auto px-6 sm:px-8 py-12 space-y-16">

                {/* 關於我 */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <Sparkles className="text-[#57755C]" size={22} />
                        <h2 className="text-2xl font-bold text-[#1E293B]">關於我</h2>
                    </div>
                    <div className="prose prose-slate max-w-none text-[1.05rem] leading-relaxed text-[#475569] bg-white p-8 rounded-2xl shadow-sm border border-[#E9ECE9]">
                        <p className="mb-4">
                            擁有超過 10 年高階主管支援與跨部門專案推動經驗，擅長將零散需求梳理為可執行的流程與制度。專長涵蓋流程設計與 SOP 化、營運優化、數位行銷、會員經營，以及網站運營、線上課程與活動企劃的端到端執行。
                        </p>
                        <p className="mb-4">
                            現負責醫學教育線上平台的營運統籌，涵蓋銷售文案、SEO 內容、電子報、活動頁面製作到數據分析與轉換策略。在非工程背景下，運用 <strong className="text-[#57755C] font-semibold">n8n、Google Apps Script、Claude、Make.com</strong> 等 AI 與自動化工具，逐步建立訂單處理、通知與資料同步等工作流程，推動團隊朝自動化與數據化管理發展，並主導功能規格設計與外部工程師協作。
                        </p>
                        <p className="m-0">
                            重視細節與使用者感受，擅長在資源有限、變動快速的環境中整合需求、推動落地，讓流程能被持續優化與複製。
                        </p>
                    </div>
                </section>

                {/* 核心能力 */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <Workflow className="text-[#57755C]" size={22} />
                        <h2 className="text-2xl font-bold text-[#1E293B]">核心能力</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E9ECE9] hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-[#F0F5F1] text-[#57755C] rounded-lg flex items-center justify-center mb-4">
                                <Briefcase size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-[#1E293B] mb-2">高階幕僚與行政支援</h3>
                            <p className="text-[#64748B] text-sm leading-relaxed">具備 4 年以上外商 CEO 秘書與總經理特助經驗。熟悉跨國會議統籌、決策資料彙整與機密文件管理，能於高壓環境維持專業度。</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E9ECE9] hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-[#F0F5F1] text-[#57755C] rounded-lg flex items-center justify-center mb-4">
                                <TerminalSquare size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-[#1E293B] mb-2">流程優化與 AI 自動化</h3>
                            <p className="text-[#64748B] text-sm leading-relaxed">熟練運用 n8n, GAS, Claude 打造自動化工作流。善於將零散行政需求化為 SOP，建立防呆且精確的內部營運與系統管理機制。</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E9ECE9] hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-[#F0F5F1] text-[#57755C] rounded-lg flex items-center justify-center mb-4">
                                <Users size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-[#1E293B] mb-2">跨單位溝通與公關統籌</h3>
                            <p className="text-[#64748B] text-sm leading-relaxed">具備醫學線上課程平台營運經驗，熟悉各職涯階段醫師之需求，擅長對外合作夥伴（機構、醫師）之聯繫協調、活動統籌與執行。</p>
                        </div>
                    </div>
                </section>

                {/* 工作經歷 */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <Briefcase className="text-[#57755C]" size={22} />
                        <h2 className="text-2xl font-bold text-[#1E293B]">工作經歷</h2>
                        <span className="text-sm text-[#94A3B8] ml-2 hidden sm:inline-block">點擊展開詳細內容</span>
                    </div>

                    <div className="space-y-4">

                        {/* 經歷 1 */}
                        <ExpandableExperienceCard
                            title="總經理特助"
                            company="達特艾立醫學品牌顧問"
                            period="2023/6 ~ 至今"
                            defaultExpanded={true}
                            isHighlight={true}
                        >
                            <div className="text-[#64748B] text-sm leading-relaxed border-l-2 border-[#C6D8C9] pl-4 mb-6 italic">
                                <p className="mb-2">2022 年成立的醫學品牌顧問公司，協助醫師與診所打造個人品牌與商業變現；旗下「醫師職涯成長學院」以線上課程與講座服務醫師職涯發展，擁有超過 5,000 位醫師會員，與醫師及資深醫療營運經理人合作，提供醫療與商業課程逾 85 堂。</p>
                                <p>協助醫師職涯成長學院之行銷、營運與行政支援，學院主要服務對象為各職涯階段的醫師與醫學生。於專案執行與會員經營過程中，持續整理醫師在學習、職涯與臨床工作上的需求，並轉化為課程與講座主題規劃之依據。</p>
                            </div>

                            <div className="space-y-6 text-[#475569]">
                                <div>
                                    <h4 className="font-bold text-[#1E293B] mb-3 text-[1.05rem]">醫師合作、課程與講座專案執行</h4>
                                    <ul className="list-disc list-outside ml-5 space-y-2 marker:text-[#57755C]">
                                        <li>協助醫師講師規劃課程、講座，負責合作溝通、內容整理與專案執行協調，作為醫師與內部團隊之間的協作窗口。</li>
                                        <li>參與多門醫師課程規劃、製作與上架，包括：PGY 系列課程（前彰基泌尿科黃品叡醫師）、醫學專業溝通系列課程（桃園同心醫療體系陳和謙醫師）、七大管路實戰技巧（台中長庚李修維醫師）、白袍人生學院合作計劃（張益豪醫師）、魏子翔醫師（子翔藥理）。</li>
                                        <li>與多位醫師 KOL 合作（樹懶醫師、Liam 的醫學日常、medixnote Celia），協助推動講座與內容專案。</li>
                                        <li>規劃與執行學院講座與線下活動（2024–2025），擔任主持與活動流程設計負責人，統籌講座節奏與執行細節。<strong className="text-[#57755C] font-semibold">累計舉辦 52 場，總參與人次達 3,411 人。</strong></li>
                                        <li>負責跨部門與對外溝通協調，確保資訊傳遞清楚、合作流程順暢，並協助專案如期落地。</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#1E293B] mb-3 text-[1.05rem]">市場拓展與會員經營</h4>
                                    <ul className="list-disc list-outside ml-5 space-y-2 marker:text-[#57755C]">
                                        <li>推動醫學生市場開發，透過 cold mail、私訊與會員轉介紹串連 16 位系學會代表，成功推進 <strong className="text-[#57755C] font-semibold">12 所校園合作，達成原定目標 200%。</strong></li>
                                        <li>於每月講座中設計轉介引流流程，帶動新會員開發，<strong className="text-[#57755C] font-semibold">校園來源佔全年會員新增 64.76%。</strong></li>
                                        <li>規劃與撰寫會員電子報，<strong className="text-[#57755C] font-semibold">平均開信率達 70%–80%。</strong></li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#1E293B] mb-3 text-[1.05rem]">營運資料與品牌成效</h4>
                                    <ul className="list-disc list-outside ml-5 space-y-2 marker:text-[#57755C]">
                                        <li>協助彙整營運數據與專案資訊，支援主管掌握決策所需關鍵資訊。</li>
                                        <li>建立營收與活動追蹤機制，在既有業務基礎上 <strong className="text-[#57755C] font-semibold">協助產品營收提升 70%。</strong></li>
                                        <li>優化網站內容分類與關鍵字策略，強化內容更新節奏與 SEO 品質，<strong className="text-[#57755C] font-semibold">全年自然搜尋點擊數年增長 1005%</strong>，PGY 與診所經營行銷關鍵字長期在 SERP 首頁。</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#1E293B] mb-3 text-[1.05rem]">流程優化與自動化</h4>
                                    <ul className="list-disc list-outside ml-5 space-y-2 marker:text-[#57755C]">
                                        <li>建立並維護講座活動頁面與管理報表，統整內容與排程進度，提升團隊執行效率。</li>
                                        <li>依任務需求導入 AI 工具與自動化工作流程設計，建立數據中心（如會員中心、營收中心等）。</li>
                                        <li>自主開發 Slack 打卡機器人（串接 Google Apps Script），支援管理部門自動彙整出缺勤紀錄並產出報表，提升行政效率。</li>
                                        <li>主導 Notion 系統設計，涵蓋公司共用入口頁、學院專案與外包工程師案件追蹤頁，作為多角色資訊整合與流程協作平台。</li>
                                    </ul>
                                </div>
                            </div>
                        </ExpandableExperienceCard>

                        {/* 經歷 2 */}
                        <ExpandableExperienceCard
                            title="產品行銷經理"
                            company="領客智能行銷股份有限公司"
                            period="2022/9 ~ 2023/6"
                        >
                            <div className="text-[#64748B] text-sm leading-relaxed border-l-2 border-[#C6D8C9] pl-4 mb-5 italic">
                                以 AI 驅動廣告優化的台灣行銷科技新創，專注品牌跨境行銷與廣告投放，為台灣少數全面導入 AI 系統的數位廣告代理商，規模約 11~30 人。
                            </div>

                            <ul className="list-disc list-outside ml-5 space-y-2 text-[#475569] marker:text-[#CBD5E1]">
                                <li>負責官網維護及 SEO 專案，<strong className="text-[#1E293B] font-semibold">流量成長 53%。</strong></li>
                                <li>營運官方 Facebook 及 LinkedIn，撰寫貼文、製作素材及廣告投放。</li>
                                <li>公司及產品行銷策略規劃與執行。</li>
                                <li>協助行政營運事務，含名單管理、報價單、款項核銷。</li>
                                <li>擔任集團內部 AI 競賽工作坊主要提案者，利用優化過的 Prompt 及介面，<strong className="text-[#1E293B] font-semibold">廣告提案效率提升 30%。</strong></li>
                            </ul>
                        </ExpandableExperienceCard>

                        {/* 經歷 3 */}
                        <ExpandableExperienceCard
                            title="Executive Assistant"
                            company="香港商旭昶香港有限公司台灣分公司 (Teamson)"
                            period="2018/2 ~ 2022/3"
                        >
                            <div className="text-[#64748B] text-sm leading-relaxed border-l-2 border-[#C6D8C9] pl-4 mb-5 italic">
                                1997 年創立，主要生產家居家具與兒童玩具，為亞馬遜北美市場市佔領先品牌，業務橫跨北美、歐洲與亞洲，台灣分公司負責區域跨國業務營運。
                            </div>

                            <ul className="list-disc list-outside ml-5 space-y-2 text-[#475569] marker:text-[#CBD5E1]">
                                <li>直屬 CEO 辦公室，獨立負責 CEO 行程管理、會議統籌、差旅安排、費用與文件管理等高階行政運作。</li>
                                <li>統籌高階會議（策略會議、跨國管理會議）之安排與執行，負責議程整理、會議紀錄與後續事項追蹤。</li>
                                <li>協助美國、英國與中國大陸高階主管之跨部門溝通與協作，確保資訊對齊與專案順利推進。</li>
                                <li>參與公司重要專案執行，負責進度追蹤、資訊整合與跨部門協調。</li>
                                <li>協助簡報製作與決策資料整理，支援 CEO 掌握營運與專案狀況。</li>
                                <li>規劃與執行 CEO 商會相關活動與對外行程，負責活動安排與現場支援。</li>
                            </ul>
                        </ExpandableExperienceCard>

                        {/* 經歷 4 */}
                        <ExpandableExperienceCard
                            title="專案管理"
                            company="好主譯工作室"
                            period="2017/3 ~ 至今 (兼職)"
                        >
                            <ul className="list-disc list-outside ml-5 space-y-2 text-[#475569] marker:text-[#CBD5E1]">
                                <li>影視字幕翻譯（英→中） / 商務簡報翻譯（英→中）</li>
                                <li>案件時程控管與品質控管（2017–2018）</li>
                                <li>客戶與譯者關係維護、新人訓練、系統表單及檔案管理（2017–2018）</li>
                            </ul>
                        </ExpandableExperienceCard>

                        {/* 經歷 5 */}
                        <ExpandableExperienceCard
                            title="活動執行、秘書助理"
                            company="中華文化總會"
                            period="2012/4 ~ 2016/6"
                        >
                            <div className="text-[#64748B] text-sm leading-relaxed border-l-2 border-[#C6D8C9] pl-4 mb-5 italic">
                                台灣最具代表性官方文化推廣機構，負責文化交流、藝術策展與台灣文化品牌建構，歷任會長多由總統兼任，專職人員約 30~50 人。
                            </div>

                            <ul className="list-disc list-outside ml-5 space-y-2 text-[#475569] marker:text-[#CBD5E1]">
                                <li>擔任會長秘書助理，提供秘書事務及行政支援，包含會議、差旅安排及訪客接待。</li>
                                <li>負責文化推廣專案執行及結案。</li>
                                <li>策劃及執行藝術品展覽，包含活動推廣、出版品編輯及出版，以及與第三方收藏家、博物館、藝術家合作。</li>
                                <li>管理中華文化總會巨椽志工隊與 Facebook 粉絲專頁。</li>
                            </ul>
                        </ExpandableExperienceCard>

                        {/* 更早期的經歷整合 */}
                        <ExpandableExperienceCard
                            title="行銷企劃"
                            company="大華證券股份有限公司"
                            period="2011/3 ~ 2012/4"
                        >
                            <ul className="list-disc list-outside ml-5 space-y-2 text-[#475569] marker:text-[#CBD5E1]">
                                <li>專案企劃與執行、活動策劃</li>
                                <li>行銷專案效益評估與績效分析</li>
                            </ul>
                        </ExpandableExperienceCard>

                        <ExpandableExperienceCard
                            title="秘書、執行企劃"
                            company="亞太新經濟學會"
                            period="2010/7 ~ 2011/2"
                        >
                            <ul className="list-disc list-outside ml-5 space-y-2 text-[#475569] marker:text-[#CBD5E1]">
                                <li>協辦「第五屆科技與人文創意競賽」</li>
                                <li>專案企劃、時程與預算控管</li>
                            </ul>
                        </ExpandableExperienceCard>

                        <ExpandableExperienceCard
                            title="副管理師"
                            company="NII 產業發展協進會"
                            period="2009/7 ~ 2010/6"
                        >
                            <ul className="list-disc list-outside ml-5 space-y-2 text-[#475569] marker:text-[#CBD5E1]">
                                <li>標準效益評估方法分析 / 文獻資料蒐集整理 / 撰寫研究成果報告 / 計畫行政管理</li>
                            </ul>
                        </ExpandableExperienceCard>

                    </div>
                </section>

                {/* 學歷 */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <GraduationCap className="text-[#57755C]" size={22} />
                        <h2 className="text-2xl font-bold text-[#1E293B]">學歷</h2>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E9ECE9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-[#1E293B] mb-1">國立政治大學</h3>
                            <p className="text-[#64748B] text-lg">經濟學系 大學畢業</p>
                        </div>
                        <span className="inline-flex shrink-0 items-center text-sm font-medium text-[#64748B] bg-[#F8FAFC] px-4 py-2 rounded-full border border-[#E2E8F0]">
                            2004/9 ~ 2009/6
                        </span>
                    </div>
                </section>

            </main>

            <footer className="bg-white border-t border-[#E9ECE9] py-10 mt-12 text-center text-[#94A3B8] text-sm">
                <p>© {new Date().getFullYear()} Stella Wu. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default StellaResume;