// search.js
(function() {
    // Load video data from videos.json (simplified version for demo)
    // In a real implementation, this would be loaded from the server
    
    const videos = [
        {"id": "K_bWU7WCj2M", "title": "Evolution of Engineering Organisations", "description": "Ezhil will explore how static governance models give way to adaptive, AI-driven controls forming the backbone of a fully governed autonomous engineering control plane."},
        {"id": "YjheR847GbA", "title": "How Global Technology Alliances enable AI success", "description": "Artur will dive into how modern advances in artificial intelligence have been driven by major improvements in how customers experience and interact with AI."},
        {"id": "zRx7_dF0RHM", "title": "Volary: The memory layer for the agentic era", "description": "We're seeing an explosion of innovation driven by AI agents, but they lack good options to remember and learn over time."},
        {"id": "zaqhLlTuNgg", "title": "AI Journey and Software Development Transformation Summary", "description": "Lisa's AI journey started with a simple need: creating illustrations for a story she'd written for her daughter."},
        {"id": "RRE8SfrreZw", "title": "Practical Tips For Using AI To Enhance And Accelerate Your Work", "description": "As AI becomes embedded in how we work, the expectation to deliver quickly and correctly is higher than ever."},
        {"id": "nn3eSLYt6LA", "title": "The Agentic Enterprise: How AI Agents Are Rebuilding Business in 2026", "description": "This session explores the transformative shift from AI assistants to autonomous AI agents in 2026."},
        {"id": "66hKxMw_kMg", "title": "Scaling AI: The Fox Knows Many Things. The Hedgehog Knows One Big Thing", "description": "In this session, David will share insights into how major brands are approaching the challenge of scaling their use of AI."},
        {"id": "tjQbQz8yxkM", "title": "Smaller Language Models for Smarter AI Agents", "description": "What if the AI industry's obsession with building ever larger language models is actually making agents worse at their jobs?"},
        {"id": "cAoQaykhVyk", "title": "Democratizing Enterprise AI: Building and Governing at Scale", "description": "In September's edition of the AI Exchange, we heard from Niloufar Zarin, Senior Director of Development, AI Technology and Innovation @ Worldpay in London."},
        {"id": "yt-9PH1SnuQ", "title": "Three Things that Cloud Can Teach Us About AI Adoption", "description": "In September's edition of the AI Exchange, we heard from Chris Jackson, Lead Consultant @ FWD View."},
        {"id": "tuG45iqb9p0", "title": "The Continuous Compliance Framework: an open source solution to reduce toil in compliance", "description": "In September's edition of the AI Exchange, our third speaker was Ian Miell, CTO @ Container Solutions."},
        {"id": "Y86Ep2PJcYw", "title": "The Art of the Possible with Generative AI", "description": "Generative AI is no longer a future concept, it's a present day reality being adopted by organisations of all sizes and across every industry."},
        {"id": "LOS1rlb2XXk", "title": "Building your first LLM app into Production at a traditional industry", "description": "This session will delve into the practicalities of building an LLM application within a traditional industry."},
        {"id": "vuGxCVBgDJM", "title": "AI in the Death Tech space", "description": null},
        {"id": "o6aj4RFRbyw", "title": "Building Scalable AI Systems: Hierarchical Intelligence & the Rise of AI Factories", "description": "AI isn't just about large models anymore, it's about ecosystems."},
        {"id": "1Ob9aHX6f9Y", "title": "Securing Vibe Coding: Addressing the Security Challenges of AI-Generated Code", "description": "Vibe Coding is transforming software development, AI tools now write code at lightning speed, boosting productivity and unlocking creativity."},
        {"id": "qxCA8xB6y5Q", "title": "How to Safely Scale Generative AI: Risk Proof Strategies for Enterprise Success", "description": "Generative AI is revolutionising enterprise innovation, but scaling it safely is still a major challenge."},
        {"id": "gzPTJ7UyM2E", "title": "Meet Platform Plane: Supercharge Dev Teams & Cut Costs by 25%", "description": "Tired of your developers getting bogged down by setup, security, and tool integration?"},
        {"id": "9DBXZPSJD14", "title": "Platform Engineers: The Hidden Architects of the AI Revolution", "description": "What if the future of Data and AI doesn't depend on new tools, but on how platform engineers evolve to connect the dots?"},
        {"id": "PJY8fDqZI2g", "title": "How to Build and Deploy AI Agents with Docker", "description": "Join Ivan Pedrazas from Docker as he breaks down how Docker is powering the next generation of AI agents."},
        {"id": "p4QL4GIj_JM", "title": "Switch Your Internal Platform to Multi-Player Mode", "description": "Think Platform Engineering is the silver bullet for scaling DevOps? Think again."},
        {"id": "g3wuQNilN6k", "title": "Cloud Native Solutions: Demonstrating ROI and Business Impact", "description": "Cloud Native tech sounds great, but how do you prove it's worth the investment?"},
        {"id": "DtBvjN5bwZY", "title": "Forget the AI hype. Here's how real AI agents are built to solve real problems", "description": "In this session, Nishi Ajmera (Solutions Architect at Publicis Sapient and Google Developer Expert in AI/ML) cuts through the buzzwords to reveal how AI agents actually work."},
        {"id": "O0Xmoxtd0-w", "title": "Securing Your Software Supply Chain: Why SBOMs Are Essential for DevOps and Compliance", "description": "Your software is only as secure as your supply chain — do you know what's inside it?"}
    ];
    
    // Get DOM elements
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    // Perform search
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (!query) {
            searchResults.innerHTML = '<p>Start typing to search videos...</p>';
            return;
        }
        
        // Filter videos
        const results = videos.filter(video => 
            video.title.toLowerCase().includes(query) || 
            (video.description && video.description.toLowerCase().includes(query))
        );
        
        // Display results
        if (results.length === 0) {
            searchResults.innerHTML = '<p>No videos found matching your search.</p>';
        } else {
            let html = '<div class="video-grid">';
            results.forEach(video => {
                html += `
                    <div class="video-card">
                        <a href="videos/${video.id}.html">
                            <img src="images/${video.id}.jpg" alt="${video.title} thumbnail">
                            <h3>${video.title}</h3>
                        </a>
                    </div>`;
            });
            html += '</div>';
            searchResults.innerHTML = html;
        }
    }
    
    // Add event listener
    searchInput.addEventListener('input', performSearch);
})();