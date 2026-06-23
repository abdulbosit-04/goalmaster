// ==========================================
// 1. ТАБҲО
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    console.log('✅ Табҳо пайдо шуданд:', tabButtons.length);

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Тугма
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Мазмун
            const tabName = this.getAttribute('data-tab');
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            const activeContent = document.getElementById(tabName);
            if (activeContent) {
                activeContent.classList.add('active');
                activeContent.style.display = 'block';
                console.log('✅ Таб иваз шуд:', tabName);
            }
        });
    });

    // Аввал Ҳадафҳоро нишон диҳем
    const firstTab = document.querySelector('.tab-btn.active');
    if (firstTab) {
        firstTab.click();
    }

    console.log('✅ Табҳо омода шуданд');
});

// ==========================================
// 2. СИСТЕМАИ БИСЁРЗАБОНА
// ==========================================
let currentLang = 'tg';

const translations = {
    tg: {
        'app_title': '🎯 GoalMaster',
        'app_subtitle': 'Танзими вақт, нақша ва ҳадафҳо',
        'tab_goals': '📋 Ҳадафҳо',
        'tab_plan': '📝 Нақша',
        'tab_timer': '⏱ Таймер',
        'tab_stats': '📊 Статистика',
        'goals_title': '📋 Ҳадафҳои шумо',
        'goal_placeholder': 'Номи ҳадаф',
        'goal_desc_placeholder': 'Тавсифи ҳадаф (ихтиёрӣ)',
        'goal_deadline_short': '⚡ Кӯтоҳмуҳлат',
        'goal_deadline_medium': '📅 Миёнамуҳлат',
        'goal_deadline_long': '🐢 Дарозмуҳлат',
        'goal_add_btn': '➕ Иловаи ҳадаф',
        'goal_empty': '📭 Ҳоло ҳадафе нест',
        'goal_progress': 'иҷро',
        'goal_complete': '✅ Иҷро',
        'goal_progress_btn': '➕ +10%',
        'goal_undo': '↩️ Бозгардон',
        'goal_delete': '🗑 Нест',
        'goal_confirm_delete': 'Оё боварӣ доред, ки ин ҳадафро нест кунед?',
        'goal_alert_empty': 'Лутфан номи ҳадафро ворид кунед!',
        'plan_title': '📝 Нақшаи рӯзона',
        'task_placeholder': 'Номи вазифа',
        'task_start': '🕐 Оғоз:',
        'task_end': '🕐 Анҷом:',
        'task_important': '⭐ Муҳим',
        'task_add_btn': '➕ Иловаи вазифа',
        'task_empty': '📭 Ҳоло вазифае нест',
        'task_alert_empty': 'Лутфан номи вазифаро ворид кунед!',
        'task_delete': '🗑 Нест',
        'task_confirm_delete': 'Оё боварӣ доред, ки ин вазифаро нест кунед?',
        'filter_all': '📋 Ҳама',
        'filter_active': '⏳ Иҷро нашуд',
        'filter_completed': '✅ Иҷро шуд',
        'filter_important': '⭐ Муҳим',
        'task_important_label': '⭐ Муҳим',
        'timer_title': '⏱ Помодоро Таймер',
        'timer_work': '⏳ Кор',
        'timer_break': '☕ Истироҳат',
        'timer_start': '▶ Сар кардан',
        'timer_pause': '⏸ Танаффус',
        'timer_resume': '▶ Давом додан',
        'timer_reset': '⏹ Бозсозӣ',
        'timer_sessions': '📊 Давраҳо:',
        'timer_total': '⏳ Вақти умумӣ:',
        'timer_work_label': '⏳ Вақти кор (дақ.):',
        'timer_break_label': '☕ Вақти истироҳат (дақ.):',
        'timer_apply': '✅ Танзим кунед',
        'timer_alert_reset': 'Лутфан аввал таймерро боздоред (Reset)!',
        'timer_alert_values': 'Лутфан арзишҳои дуруст ворид кунед!',
        'timer_alert_work_done': '🎉 Вақти кор ба охир расид! Вақти истироҳат!',
        'timer_alert_break_done': '☕ Вақти истироҳат ба охир расид! Ба кор баргардед!',
        'stats_title': '📊 Статистика',
        'stats_total': '📋 Ҳамаи ҳадафҳо',
        'stats_completed': '✅ Иҷрошуда',
        'stats_pending': '⏳ Иҷронашуд',
        'stats_percent': '📈 Фоизи иҷро',
        'stats_chart_doughnut': '📊 Фоизи иҷро',
        'stats_chart_bar': '📊 Муҳлатҳо',
        'stats_chart_completed': '✅ Иҷрошуда',
        'stats_chart_pending': '⏳ Иҷронашуд',
        'stats_chart_short': '⚡ Кӯтоҳ',
        'stats_chart_medium': '📅 Миёна',
        'stats_chart_long': '🐢 Дароз',
    },
    ru: {
        'app_title': '🎯 GoalMaster',
        'app_subtitle': 'Управление временем, планами и целями',
        'tab_goals': '📋 Цели',
        'tab_plan': '📝 План',
        'tab_timer': '⏱ Таймер',
        'tab_stats': '📊 Статистика',
        'goals_title': '📋 Ваши цели',
        'goal_placeholder': 'Название цели',
        'goal_desc_placeholder': 'Описание цели (необязательно)',
        'goal_deadline_short': '⚡ Краткосрочная',
        'goal_deadline_medium': '📅 Среднесрочная',
        'goal_deadline_long': '🐢 Долгосрочная',
        'goal_add_btn': '➕ Добавить цель',
        'goal_empty': '📭 Целей пока нет',
        'goal_progress': 'выполнено',
        'goal_complete': '✅ Выполнить',
        'goal_progress_btn': '➕ +10%',
        'goal_undo': '↩️ Вернуть',
        'goal_delete': '🗑 Удалить',
        'goal_confirm_delete': 'Вы уверены, что хотите удалить эту цель?',
        'goal_alert_empty': 'Пожалуйста, введите название цели!',
        'plan_title': '📝 План на день',
        'task_placeholder': 'Название задачи',
        'task_start': '🕐 Начало:',
        'task_end': '🕐 Конец:',
        'task_important': '⭐ Важная',
        'task_add_btn': '➕ Добавить задачу',
        'task_empty': '📭 Задач пока нет',
        'task_alert_empty': 'Пожалуйста, введите название задачи!',
        'task_delete': '🗑 Удалить',
        'task_confirm_delete': 'Вы уверены, что хотите удалить эту задачу?',
        'filter_all': '📋 Все',
        'filter_active': '⏳ Не выполнено',
        'filter_completed': '✅ Выполнено',
        'filter_important': '⭐ Важные',
        'task_important_label': '⭐ Важная',
        'timer_title': '⏱ Таймер Помодоро',
        'timer_work': '⏳ Работа',
        'timer_break': '☕ Отдых',
        'timer_start': '▶ Старт',
        'timer_pause': '⏸ Пауза',
        'timer_resume': '▶ Продолжить',
        'timer_reset': '⏹ Сброс',
        'timer_sessions': '📊 Сессии:',
        'timer_total': '⏳ Общее время:',
        'timer_work_label': '⏳ Время работы (мин.):',
        'timer_break_label': '☕ Время отдыха (мин.):',
        'timer_apply': '✅ Применить',
        'timer_alert_reset': 'Сначала остановите таймер (Reset)!',
        'timer_alert_values': 'Пожалуйста, введите корректные значения!',
        'timer_alert_work_done': '🎉 Время работы закончилось! Время отдыха!',
        'timer_alert_break_done': '☕ Время отдыха закончилось! Возвращайтесь к работе!',
        'stats_title': '📊 Статистика',
        'stats_total': '📋 Всего целей',
        'stats_completed': '✅ Выполнено',
        'stats_pending': '⏳ Не выполнено',
        'stats_percent': '📈 Процент выполнения',
        'stats_chart_doughnut': '📊 Процент выполнения',
        'stats_chart_bar': '📊 Сроки целей',
        'stats_chart_completed': '✅ Выполнено',
        'stats_chart_pending': '⏳ Не выполнено',
        'stats_chart_short': '⚡ Краткие',
        'stats_chart_medium': '📅 Средние',
        'stats_chart_long': '🐢 Долгие',
    },
    en: {
        'app_title': '🎯 GoalMaster',
        'app_subtitle': 'Manage time, plans and goals',
        'tab_goals': '📋 Goals',
        'tab_plan': '📝 Plan',
        'tab_timer': '⏱ Timer',
        'tab_stats': '📊 Statistics',
        'goals_title': '📋 Your Goals',
        'goal_placeholder': 'Goal name',
        'goal_desc_placeholder': 'Goal description (optional)',
        'goal_deadline_short': '⚡ Short-term',
        'goal_deadline_medium': '📅 Medium-term',
        'goal_deadline_long': '🐢 Long-term',
        'goal_add_btn': '➕ Add Goal',
        'goal_empty': '📭 No goals yet',
        'goal_progress': 'completed',
        'goal_complete': '✅ Complete',
        'goal_progress_btn': '➕ +10%',
        'goal_undo': '↩️ Undo',
        'goal_delete': '🗑 Delete',
        'goal_confirm_delete': 'Are you sure you want to delete this goal?',
        'goal_alert_empty': 'Please enter a goal name!',
        'plan_title': '📝 Daily Plan',
        'task_placeholder': 'Task name',
        'task_start': '🕐 Start:',
        'task_end': '🕐 End:',
        'task_important': '⭐ Important',
        'task_add_btn': '➕ Add Task',
        'task_empty': '📭 No tasks yet',
        'task_alert_empty': 'Please enter a task name!',
        'task_delete': '🗑 Delete',
        'task_confirm_delete': 'Are you sure you want to delete this task?',
        'filter_all': '📋 All',
        'filter_active': '⏳ Incomplete',
        'filter_completed': '✅ Completed',
        'filter_important': '⭐ Important',
        'task_important_label': '⭐ Important',
        'timer_title': '⏱ Pomodoro Timer',
        'timer_work': '⏳ Work',
        'timer_break': '☕ Break',
        'timer_start': '▶ Start',
        'timer_pause': '⏸ Pause',
        'timer_resume': '▶ Resume',
        'timer_reset': '⏹ Reset',
        'timer_sessions': '📊 Sessions:',
        'timer_total': '⏳ Total time:',
        'timer_work_label': '⏳ Work time (min.):',
        'timer_break_label': '☕ Break time (min.):',
        'timer_apply': '✅ Apply',
        'timer_alert_reset': 'Please stop the timer first (Reset)!',
        'timer_alert_values': 'Please enter valid values!',
        'timer_alert_work_done': '🎉 Work time is over! Time to take a break!',
        'timer_alert_break_done': '☕ Break time is over! Time to work!',
        'stats_title': '📊 Statistics',
        'stats_total': '📋 Total Goals',
        'stats_completed': '✅ Completed',
        'stats_pending': '⏳ Pending',
        'stats_percent': '📈 Completion Rate',
        'stats_chart_doughnut': '📊 Completion Rate',
        'stats_chart_bar': '📊 Goal Deadlines',
        'stats_chart_completed': '✅ Completed',
        'stats_chart_pending': '⏳ Pending',
        'stats_chart_short': '⚡ Short',
        'stats_chart_medium': '📅 Medium',
        'stats_chart_long': '🐢 Long',
    },
    fa: {
        'app_title': '🎯 GoalMaster',
        'app_subtitle': 'مدیریت زمان، برنامه و اهداف',
        'tab_goals': '📋 اهداف',
        'tab_plan': '📝 برنامه',
        'tab_timer': '⏱ تایمر',
        'tab_stats': '📊 آمار',
        'goals_title': '📋 اهداف شما',
        'goal_placeholder': 'نام هدف',
        'goal_desc_placeholder': 'توضیحات هدف (اختیاری)',
        'goal_deadline_short': '⚡ کوتاه مدت',
        'goal_deadline_medium': '📅 میان مدت',
        'goal_deadline_long': '🐢 بلند مدت',
        'goal_add_btn': '➕ افزودن هدف',
        'goal_empty': '📭 هنوز هدفی وجود ندارد',
        'goal_progress': 'انجام شد',
        'goal_complete': '✅ انجام شد',
        'goal_progress_btn': '➕ +10%',
        'goal_undo': '↩️ بازگرداندن',
        'goal_delete': '🗑 حذف',
        'goal_confirm_delete': 'آیا مطمئن هستید که این هدف را حذف کنید؟',
        'goal_alert_empty': 'لطفا نام هدف را وارد کنید!',
        'plan_title': '📝 برنامه روزانه',
        'task_placeholder': 'نام وظیفه',
        'task_start': '🕐 شروع:',
        'task_end': '🕐 پایان:',
        'task_important': '⭐ مهم',
        'task_add_btn': '➕ افزودن وظیفه',
        'task_empty': '📭 هنوز وظیفه‌ای وجود ندارد',
        'task_alert_empty': 'لطفا نام وظیفه را وارد کنید!',
        'task_delete': '🗑 حذف',
        'task_confirm_delete': 'آیا مطمئن هستید که این وظیفه را حذف کنید؟',
        'filter_all': '📋 همه',
        'filter_active': '⏳ انجام نشده',
        'filter_completed': '✅ انجام شده',
        'filter_important': '⭐ مهم',
        'task_important_label': '⭐ مهم',
        'timer_title': '⏱ تایمر پومودورو',
        'timer_work': '⏳ کار',
        'timer_break': '☕ استراحت',
        'timer_start': '▶ شروع',
        'timer_pause': '⏸ توقف',
        'timer_resume': '▶ ادامه',
        'timer_reset': '⏹ بازنشانی',
        'timer_sessions': '📊 جلسات:',
        'timer_total': '⏳ زمان کل:',
        'timer_work_label': '⏳ زمان کار (دقیقه):',
        'timer_break_label': '☕ زمان استراحت (دقیقه):',
        'timer_apply': '✅ اعمال',
        'timer_alert_reset': 'لطفا ابتدا تایمر را متوقف کنید (بازنشانی)!',
        'timer_alert_values': 'لطفا مقادیر معتبر وارد کنید!',
        'timer_alert_work_done': '🎉 زمان کار به پایان رسید! زمان استراحت!',
        'timer_alert_break_done': '☕ زمان استراحت به پایان رسید! به کار بازگردید!',
        'stats_title': '📊 آمار',
        'stats_total': '📋 کل اهداف',
        'stats_completed': '✅ انجام شده',
        'stats_pending': '⏳ انجام نشده',
        'stats_percent': '📈 درصد انجام',
        'stats_chart_doughnut': '📊 درصد انجام',
        'stats_chart_bar': '📊 مدت زمان اهداف',
        'stats_chart_completed': '✅ انجام شده',
        'stats_chart_pending': '⏳ انجام نشده',
        'stats_chart_short': '⚡ کوتاه',
        'stats_chart_medium': '📅 میان',
        'stats_chart_long': '🐢 بلند',
    },
    ar: {
        'app_title': '🎯 GoalMaster',
        'app_subtitle': 'إدارة الوقت والخطط والأهداف',
        'tab_goals': '📋 الأهداف',
        'tab_plan': '📝 الخطة',
        'tab_timer': '⏱ المؤقت',
        'tab_stats': '📊 الإحصائيات',
        'goals_title': '📋 أهدافك',
        'goal_placeholder': 'اسم الهدف',
        'goal_desc_placeholder': 'وصف الهدف (اختياري)',
        'goal_deadline_short': '⚡ قصير المدى',
        'goal_deadline_medium': '📅 متوسط المدى',
        'goal_deadline_long': '🐢 طويل المدى',
        'goal_add_btn': '➕ إضافة هدف',
        'goal_empty': '📭 لا توجد أهداف بعد',
        'goal_progress': 'تم الإنجاز',
        'goal_complete': '✅ إكمال',
        'goal_progress_btn': '➕ +10%',
        'goal_undo': '↩️ استرجاع',
        'goal_delete': '🗑 حذف',
        'goal_confirm_delete': 'هل أنت متأكد من حذف هذا الهدف؟',
        'goal_alert_empty': 'الرجاء إدخال اسم الهدف!',
        'plan_title': '📝 الخطة اليومية',
        'task_placeholder': 'اسم المهمة',
        'task_start': '🕐 البدء:',
        'task_end': '🕐 الانتهاء:',
        'task_important': '⭐ مهمة مهمة',
        'task_add_btn': '➕ إضافة مهمة',
        'task_empty': '📭 لا توجد مهام بعد',
        'task_alert_empty': 'الرجاء إدخال اسم المهمة!',
        'task_delete': '🗑 حذف',
        'task_confirm_delete': 'هل أنت متأكد من حذف هذه المهمة؟',
        'filter_all': '📋 الكل',
        'filter_active': '⏳ لم تتم',
        'filter_completed': '✅ تمت',
        'filter_important': '⭐ مهم',
        'task_important_label': '⭐ مهم',
        'timer_title': '⏱ مؤقت بومودورو',
        'timer_work': '⏳ عمل',
        'timer_break': '☕ استراحة',
        'timer_start': '▶ ابدأ',
        'timer_pause': '⏸ إيقاف مؤقت',
        'timer_resume': '▶ استمرار',
        'timer_reset': '⏹ إعادة تعيين',
        'timer_sessions': '📊 الجلسات:',
        'timer_total': '⏳ الوقت الإجمالي:',
        'timer_work_label': '⏳ وقت العمل (دقيقة):',
        'timer_break_label': '☕ وقت الاستراحة (دقيقة):',
        'timer_apply': '✅ تطبيق',
        'timer_alert_reset': 'الرجاء إيقاف المؤقت أولاً (إعادة تعيين)!',
        'timer_alert_values': 'الرجاء إدخال قيم صحيحة!',
        'timer_alert_work_done': '🎉 انتهى وقت العمل! حان وقت الاستراحة!',
        'timer_alert_break_done': '☕ انتهى وقت الاستراحة! عد إلى العمل!',
        'stats_title': '📊 الإحصائيات',
        'stats_total': '📋 إجمالي الأهداف',
        'stats_completed': '✅ تم الإنجاز',
        'stats_pending': '⏳ لم تتم',
        'stats_percent': '📈 نسبة الإنجاز',
        'stats_chart_doughnut': '📊 نسبة الإنجاز',
        'stats_chart_bar': '📊 فترات الأهداف',
        'stats_chart_completed': '✅ تم الإنجاز',
        'stats_chart_pending': '⏳ لم تتم',
        'stats_chart_short': '⚡ قصير',
        'stats_chart_medium': '📅 متوسط',
        'stats_chart_long': '🐢 طويل',
    }
};

// ===== Функсияҳои забон =====
function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('language', lang);
    translatePage();
    updateTimerModeTranslation();
    updateStats();
    
    // Барои арабӣ ва форсӣ
    if (lang === 'ar' || lang === 'fa') {
        document.body.style.direction = 'rtl';
        document.body.style.textAlign = 'right';
    } else {
        document.body.style.direction = 'ltr';
        document.body.style.textAlign = 'left';
    }
    
    // Навсозии парчам
    const activeOption = document.querySelector(`.lang-option[data-lang="${lang}"]`);
    if (activeOption) {
        document.getElementById('current-lang-flag').textContent = activeOption.querySelector('.lang-flag').textContent;
    }
    
    console.log('🌍 Забон иваз шуд:', lang);
}

function loadLanguage() {
    const saved = localStorage.getItem('language');
    if (saved && translations[saved]) {
        currentLang = saved;
    } else {
        currentLang = 'tg';
    }
    
    // Навсозии парчам
    const activeOption = document.querySelector(`.lang-option[data-lang="${currentLang}"]`);
    if (activeOption) {
        document.getElementById('current-lang-flag').textContent = activeOption.querySelector('.lang-flag').textContent;
        activeOption.classList.add('active');
    }
    
    translatePage();
    console.log('🌍 Забон бор шуд:', currentLang);
}

// ===== МЕНЮИ ЗАБОН =====
const dropdownBtn = document.getElementById('langDropdownBtn');
const dropdownContent = document.getElementById('langDropdownContent');

if (dropdownBtn) {
    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
        this.classList.toggle('active');
    });
}

document.addEventListener('click', function() {
    if (dropdownContent) {
        dropdownContent.classList.remove('show');
        if (dropdownBtn) dropdownBtn.classList.remove('active');
    }
});

document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', function(e) {
        e.stopPropagation();
        const lang = this.getAttribute('data-lang');
        
        document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        
        changeLanguage(lang);
        
        if (dropdownContent) dropdownContent.classList.remove('show');
        if (dropdownBtn) dropdownBtn.classList.remove('active');
    });
});

// ==========================================
// 3. ҲАДАФҲО
// ==========================================
let goals = [];
let doughnutChart = null;
let barChart = null;

const goalForm = document.getElementById('goal-form');
const goalTitle = document.getElementById('goal-title');
const goalDesc = document.getElementById('goal-desc');
const goalDeadline = document.getElementById('goal-deadline');
const goalsList = document.getElementById('goals-list');

function loadGoals() {
    const stored = localStorage.getItem('goals');
    if (stored) {
        try {
            goals = JSON.parse(stored);
        } catch(e) {
            goals = [];
        }
    } else {
        goals = [
            { id: Date.now() + 1, title: 'Омӯхтани JavaScript', desc: 'Дарсҳои JavaScript-ро омӯзам', deadline: 'medium', completed: false, progress: 50 },
            { id: Date.now() + 2, title: 'Сохтани GoalMaster', desc: 'Ин вебсайтро созам', deadline: 'long', completed: false, progress: 30 }
        ];
        saveGoals();
    }
    renderGoals();
}

function saveGoals() {
    localStorage.setItem('goals', JSON.stringify(goals));
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function renderGoals() {
    if (goals.length === 0) {
        goalsList.innerHTML = `<p class="empty-msg" data-i18n="goal_empty">📭 Ҳоло ҳадафе нест</p>`;
        updateStats();
        return;
    }

    let html = '';
    goals.forEach(goal => {
        let badgeClass = 'badge-medium';
        let badgeText = '📅 Миёна';
        if (goal.deadline === 'short') {
            badgeClass = 'badge-short';
            badgeText = '⚡ Кӯтоҳ';
        } else if (goal.deadline === 'long') {
            badgeClass = 'badge-long';
            badgeText = '🐢 Дароз';
        }

        const completedClass = goal.completed ? 'goal-completed' : '';
        const progress = goal.completed ? 100 : (goal.progress || 0);

        html += `
            <div class="goal-item ${completedClass}" data-id="${goal.id}">
                <div class="goal-header">
                    <h3 class="goal-title">${escapeHtml(goal.title)}</h3>
                    <span class="goal-badge ${badgeClass}">${badgeText}</span>
                </div>
                ${goal.desc ? `<p class="goal-desc">${escapeHtml(goal.desc)}</p>` : ''}
                <div class="goal-footer">
                    <div class="goal-progress">
                        <div class="progress-bar-bg">
                            <div class="progress-bar-fill" style="width: ${progress}%"></div>
                        </div>
                        <div class="progress-text">${progress}% ${translations[currentLang]?.goal_progress || 'иҷро'}</div>
                    </div>
                    <div class="goal-actions">
                        ${!goal.completed ? `
                            <button class="btn-complete" onclick="completeGoal(${goal.id})" data-i18n="goal_complete">✅ Иҷро</button>
                            <button class="btn-incomplete" onclick="increaseProgress(${goal.id})" data-i18n="goal_progress_btn">➕ +10%</button>
                        ` : `
                            <button class="btn-incomplete" onclick="uncompleteGoal(${goal.id})" data-i18n="goal_undo">↩️ Бозгардон</button>
                        `}
                        <button class="btn-delete" onclick="deleteGoal(${goal.id})" data-i18n="goal_delete">🗑 Нест</button>
                    </div>
                </div>
            </div>
        `;
    });

    goalsList.innerHTML = html;
    updateStats();
}

if (goalForm) {
    goalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('📝 Формаи ҳадаф фиристода шуд');

        const title = goalTitle.value.trim();
        if (!title) {
            alert(translations[currentLang]?.goal_alert_empty || 'Лутфан номи ҳадафро ворид кунед!');
            return;
        }

        const newGoal = {
            id: Date.now(),
            title: title,
            desc: goalDesc.value.trim(),
            deadline: goalDeadline.value,
            completed: false,
            progress: 0
        };

        goals.unshift(newGoal);
        saveGoals();
        renderGoals();

        goalTitle.value = '';
        goalDesc.value = '';
        goalTitle.focus();

        console.log('✅ Ҳадаф илова шуд:', newGoal.title);
    });
}

function completeGoal(id) {
    const goal = goals.find(g => g.id === id);
    if (goal) {
        goal.completed = true;
        goal.progress = 100;
        saveGoals();
        renderGoals();
    }
}

function uncompleteGoal(id) {
    const goal = goals.find(g => g.id === id);
    if (goal) {
        goal.completed = false;
        goal.progress = 0;
        saveGoals();
        renderGoals();
    }
}

function increaseProgress(id) {
    const goal = goals.find(g => g.id === id);
    if (goal && !goal.completed) {
        goal.progress = Math.min(100, goal.progress + 10);
        if (goal.progress === 100) {
            goal.completed = true;
        }
        saveGoals();
        renderGoals();
    }
}

function deleteGoal(id) {
    if (confirm(translations[currentLang]?.goal_confirm_delete || 'Оё боварӣ доред, ки ин ҳадафро нест кунед?')) {
        goals = goals.filter(g => g.id !== id);
        saveGoals();
        renderGoals();
    }
}

// ==========================================
// 4. СТАТИСТИКА
// ==========================================
function updateStats() {
    const total = goals.length;
    const completed = goals.filter(g => g.completed).length;
    const pending = total - completed;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    const totalEl = document.getElementById('total-goals');
    const completedEl = document.getElementById('completed-goals');
    const pendingEl = document.getElementById('pending-goals');
    const percentEl = document.getElementById('progress-percent');

    if (totalEl) totalEl.textContent = total;
    if (completedEl) completedEl.textContent = completed;
    if (pendingEl) pendingEl.textContent = pending;
    if (percentEl) percentEl.textContent = percent + '%';

    updateCharts(completed, pending, total);
}

function updateCharts(completed, pending, total) {
    const doughnutCtx = document.getElementById('doughnut-chart');
    if (doughnutCtx) {
        if (doughnutChart) doughnutChart.destroy();
        doughnutChart = new Chart(doughnutCtx, {
            type: 'doughnut',
            data: {
                labels: [translations[currentLang]?.stats_chart_completed || '✅ Иҷрошуда', 
                         translations[currentLang]?.stats_chart_pending || '⏳ Иҷронашуд'],
                datasets: [{
                    data: [completed, pending],
                    backgroundColor: ['#2ecc71', '#e74c3c'],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { position: 'bottom' } },
                cutout: '65%'
            }
        });
    }

    const short = goals.filter(g => g.deadline === 'short').length;
    const medium = goals.filter(g => g.deadline === 'medium').length;
    const long = goals.filter(g => g.deadline === 'long').length;

    const barCtx = document.getElementById('bar-chart');
    if (barCtx) {
        if (barChart) barChart.destroy();
        barChart = new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: [translations[currentLang]?.stats_chart_short || '⚡ Кӯтоҳ',
                         translations[currentLang]?.stats_chart_medium || '📅 Миёна',
                         translations[currentLang]?.stats_chart_long || '🐢 Дароз'],
                datasets: [{
                    label: 'Шумора',
                    data: [short, medium, long],
                    backgroundColor: ['#e74c3c', '#f39c12', '#2ecc71'],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
            }
        });
    }
}

function updateTimerModeTranslation() {
    const timerMode = document.getElementById('timer-mode');
    if (timerMode) {
        if (currentMode === 'work') {
            timerMode.textContent = translations[currentLang]?.timer_work || '⏳ Кор';
        } else {
            timerMode.textContent = translations[currentLang]?.timer_break || '☕ Истироҳат';
        }
    }
}

// ==========================================
// 5. НАҚША
// ==========================================
let tasks = [];
let currentFilter = 'all';

const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title');
const taskStart = document.getElementById('task-start');
const taskEnd = document.getElementById('task-end');
const taskImportant = document.getElementById('task-important');
const tasksList = document.getElementById('tasks-list');
const filterBtns = document.querySelectorAll('.filter-btn');

function loadTasks() {
    const stored = localStorage.getItem('tasks');
    if (stored) {
        try { tasks = JSON.parse(stored); } catch(e) { tasks = []; }
    } else {
        tasks = [
            { id: Date.now() + 100, title: 'Хондани китоб', start: '09:00', end: '10:00', important: true, completed: false },
            { id: Date.now() + 101, title: 'Навиштани код', start: '10:30', end: '12:00', important: false, completed: false }
        ];
        saveTasks();
    }
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    let filteredTasks = tasks;
    if (currentFilter === 'active') filteredTasks = tasks.filter(t => !t.completed);
    else if (currentFilter === 'completed') filteredTasks = tasks.filter(t => t.completed);
    else if (currentFilter === 'important') filteredTasks = tasks.filter(t => t.important);

    if (filteredTasks.length === 0) {
        tasksList.innerHTML = `<p class="empty-msg" data-i18n="task_empty">📭 Ҳоло вазифае нест</p>`;
        return;
    }

    let html = '';
    filteredTasks.forEach(task => {
        const completedClass = task.completed ? 'completed' : '';
        const importantClass = task.important ? 'important' : '';
        const checkedAttr = task.completed ? 'checked' : '';

        html += `
            <div class="task-item ${completedClass} ${importantClass}" data-id="${task.id}">
                <div class="task-left">
                    <input type="checkbox" class="task-checkbox" ${checkedAttr} onchange="toggleTask(${task.id})">
                    <div class="task-info">
                        <p class="task-title">${escapeHtml(task.title)}</p>
                        <div class="task-time">
                            🕐 ${task.start} — ${task.end}
                            ${task.important ? '<span class="important-star">⭐ ' + (translations[currentLang]?.task_important_label || 'Муҳим') + '</span>' : ''}
                        </div>
                    </div>
                </div>
                <div class="task-right">
                    <button class="btn-delete-task" onclick="deleteTask(${task.id})" data-i18n="task_delete">🗑 Нест</button>
                </div>
            </div>
        `;
    });

    tasksList.innerHTML = html;
}

if (taskForm) {
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = taskTitle.value.trim();
        if (!title) {
            alert(translations[currentLang]?.task_alert_empty || 'Лутфан номи вазифаро ворид кунед!');
            return;
        }

        const newTask = {
            id: Date.now(),
            title: title,
            start: taskStart.value || '09:00',
            end: taskEnd.value || '10:00',
            important: taskImportant.checked,
            completed: false
        };

        tasks.unshift(newTask);
        saveTasks();
        renderTasks();
        taskTitle.value = '';
        taskImportant.checked = false;
        taskTitle.focus();
    });
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}

function deleteTask(id) {
    if (confirm(translations[currentLang]?.task_confirm_delete || 'Оё боварӣ доред, ки ин вазифаро нест кунед?')) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        renderTasks();
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.getAttribute('data-filter');
        renderTasks();
    });
});

// ==========================================
// 6. ТАЙМЕР
// ==========================================
let timerInterval = null;
let timerRunning = false;
let timerPaused = false;
let timeLeft = 25 * 60;
let currentMode = 'work';
let sessions = 0;
let totalTime = 0;

const timerTime = document.getElementById('timer-time');
const timerMode = document.getElementById('timer-mode');
const timerCircle = document.querySelector('.timer-circle');
const startBtn = document.getElementById('timer-start');
const pauseBtn = document.getElementById('timer-pause');
const resetBtn = document.getElementById('timer-reset');
const sessionCount = document.getElementById('session-count');
const totalTimeDisplay = document.getElementById('total-time');
const workTimeInput = document.getElementById('work-time');
const breakTimeInput = document.getElementById('break-time');
const applySettingsBtn = document.getElementById('apply-settings');

function playSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.3;
        oscillator.start();
        setTimeout(() => oscillator.stop(), 500);
    } catch(e) {
        console.log('🔔 Сигнал!');
    }
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    if (timerTime) {
        timerTime.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    if (timerMode) {
        if (currentMode === 'work') {
            timerMode.textContent = translations[currentLang]?.timer_work || '⏳ Кор';
            if (timerCircle) timerCircle.classList.remove('break');
        } else {
            timerMode.textContent = translations[currentLang]?.timer_break || '☕ Истироҳат';
            if (timerCircle) timerCircle.classList.add('break');
        }
    }
    
    if (sessionCount) sessionCount.textContent = sessions;
    if (totalTimeDisplay) {
        const totalMinutes = Math.floor(totalTime / 60);
        const totalSeconds = totalTime % 60;
        totalTimeDisplay.textContent = `${totalMinutes}:${String(totalSeconds).padStart(2, '0')}`;
    }
}

function startTimer() {
    if (timerRunning && !timerPaused) return;
    
    if (timerPaused) {
        timerPaused = false;
        timerRunning = true;
        if (startBtn) { startBtn.disabled = true; startBtn.textContent = translations[currentLang]?.timer_start || '▶ Сар кардан'; }
        if (pauseBtn) pauseBtn.disabled = false;
        timerInterval = setInterval(tick, 1000);
        return;
    }
    
    if (timeLeft <= 0) { resetTimer(); return; }
    
    timerRunning = true;
    timerPaused = false;
    if (startBtn) startBtn.disabled = true;
    if (pauseBtn) pauseBtn.disabled = false;
    if (resetBtn) resetBtn.disabled = false;
    timerInterval = setInterval(tick, 1000);
}

function tick() {
    timeLeft--;
    totalTime++;
    updateDisplay();
    
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerRunning = false;
        playSound();
        
        if (currentMode === 'work') {
            sessions++;
            currentMode = 'break';
            timeLeft = parseInt(breakTimeInput.value) * 60;
            alert(translations[currentLang]?.timer_alert_work_done || '🎉 Вақти кор ба охир расид! Вақти истироҳат!');
        } else {
            currentMode = 'work';
            timeLeft = parseInt(workTimeInput.value) * 60;
            alert(translations[currentLang]?.timer_alert_break_done || '☕ Вақти истироҳат ба охир расид! Ба кор баргардед!');
        }
        
        updateDisplay();
        updateTimerModeTranslation();
        if (startBtn) startBtn.disabled = false;
        if (pauseBtn) pauseBtn.disabled = true;
        timerRunning = false;
    }
}

function pauseTimer() {
    if (!timerRunning) return;
    clearInterval(timerInterval);
    timerInterval = null;
    timerRunning = false;
    timerPaused = true;
    if (startBtn) { startBtn.disabled = false; startBtn.textContent = translations[currentLang]?.timer_resume || '▶ Давом додан'; }
    if (pauseBtn) pauseBtn.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerRunning = false;
    timerPaused = false;
    currentMode = 'work';
    timeLeft = parseInt(workTimeInput.value) * 60;
    if (startBtn) { startBtn.disabled = false; startBtn.textContent = translations[currentLang]?.timer_start || '▶ Сар кардан'; }
    if (pauseBtn) pauseBtn.disabled = true;
    if (resetBtn) resetBtn.disabled = false;
    updateDisplay();
    updateTimerModeTranslation();
}

function applySettings() {
    if (timerRunning) {
        alert(translations[currentLang]?.timer_alert_reset || 'Лутфан аввал таймерро боздоред (Reset)!');
        return;
    }
    let work = parseInt(workTimeInput.value);
    let breakTime = parseInt(breakTimeInput.value);
    if (work < 1 || work > 60 || breakTime < 1 || breakTime > 30) {
        alert(translations[currentLang]?.timer_alert_values || 'Лутфан арзишҳои дуруст ворид кунед!');
        return;
    }
    if (currentMode === 'work') {
        timeLeft = work * 60;
    } else {
        timeLeft = breakTime * 60;
    }
    updateDisplay();
}

if (startBtn) startBtn.addEventListener('click', startTimer);
if (pauseBtn) pauseBtn.addEventListener('click', pauseTimer);
if (resetBtn) resetBtn.addEventListener('click', resetTimer);
if (applySettingsBtn) applySettingsBtn.addEventListener('click', applySettings);

// ==========================================
// 7. ОҒОЗ
// ==========================================
loadLanguage();
loadGoals();
loadTasks();
updateDisplay();

console.log('✅ GoalMaster пурра омода шуд!');
alert('🎯 GoalMaster бомуваффақият бор шуд!');