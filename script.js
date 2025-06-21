// 工具数据 - 每个工具可以指定自定义图标
const tools = [
    {
        name: "文本处理工具",
        description: "提供各种文本处理功能",
        filename: "tool1.html",
        icon: "./img/tool1.jpg"  // 自定义图标路径
    },
    {
        name: "图片压缩工具",
        description: "简单实用的计算工具高效快速的图片压缩工具",
        filename: "tool2.html",
        icon: "img/tool2.png"  // 自定义图标路径
    },
        {
        name: "图床连接处理",
        description: "为个人图床制作的专用链接生成",
        filename: "tool3.html",
        icon: "img/tool2.png"  // 自定义图标路径
    },
    {
        name: "时间转换",
        description: "各种时间格式转换",
        filename: "tool4.html",
        icon: "img/default-tool.png"  // 使用默认图标
    }
];

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const toolsContainer = document.getElementById('tools-container');
    
    // 初始渲染工具列表
    renderTools(tools);
    
    // 搜索功能
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredTools = tools.filter(tool => 
            tool.name.toLowerCase().includes(searchTerm) || 
            tool.description.toLowerCase().includes(searchTerm)
        );
        renderTools(filteredTools);
    });
    
    /**
     * 渲染工具卡片
     * @param {Array} tools - 要渲染的工具数组
     */
    function renderTools(tools) {
        toolsContainer.innerHTML = '';
        
        if (tools.length === 0) {
            toolsContainer.innerHTML = `
                <div class="no-results">
                    <h3>没有找到匹配的工具</h3>
                    <p>尝试不同的搜索关键词</p>
                </div>
            `;
            return;
        }
        
        tools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            
            // 使用自定义图标，如果没有则使用默认图标
            const iconPath = tool.icon || 'img/default-tool.png';
            
            toolCard.innerHTML = `
                <img src="${iconPath}" alt="${tool.name}图标" class="tool-icon">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <a href="tools/${tool.filename}" class="tool-link">使用工具</a>
            `;
            
            toolsContainer.appendChild(toolCard);
        });
    }
});