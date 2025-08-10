// Post data with full content and links
const posts = {
    'topological-data-analysis': {
        title: 'A Gentle Introduction to Topological Data Analysis',
        date: 'July 2023',
        content: `
            <h2>A Gentle Introduction to Topological Data Analysis</h2>
            <p class="post-date">July 2023</p>
            
            <p>I had the incredible opportunity to teach a "Non-mathy Introduction to Topological Data Analysis" seminar at the Yale Young Global Scholars program for high school juniors and seniors.</p>
            
            <p>This seminar was designed to make complex mathematical concepts accessible to young minds, focusing on the intuitive understanding of how topology can be applied to data analysis without getting lost in heavy mathematical formalism.</p>
            
            <h3>What We Covered</h3>
            <ul>
                <li>Basic concepts of topology and shape</li>
                <li>How data can have "shape" and why it matters</li>
                <li>Real-world applications in data science</li>
                <li>Interactive examples and visualizations</li>
            </ul>
            
            <h3>Resources</h3>
            <p><a href="#" target="_blank">📊 View Seminar Slides</a></p>
            <p><a href="#" target="_blank">📝 Additional Reading Materials</a></p>
            
            <p>The experience reinforced my belief that complex mathematical concepts can be made accessible when presented with the right approach and enthusiasm.</p>
        `
    },
    'knot-theory': {
        title: 'A Gentle Introduction to Knot Theory',
        date: 'July 2023',
        content: `
            <h2>A Gentle Introduction to Knot Theory</h2>
            <p class="post-date">July 2023</p>
            
            <p>Knot theory is one of the most beautiful and intuitive branches of mathematics, dealing with the mathematical study of knots and their properties.</p>
            
            <p>In this exploration, I delve into how abstract mathematical concepts can be made tangible and engaging for students through visual representations and hands-on activities.</p>
            
            <h3>Key Topics</h3>
            <ul>
                <li>What makes a mathematical knot different from everyday knots</li>
                <li>Knot invariants and their applications</li>
                <li>Connections to other areas of mathematics</li>
                <li>Modern applications in biology and chemistry</li>
            </ul>
            
            <h3>Resources</h3>
            <p><a href="#" target="_blank">🔗 Interactive Knot Visualizations</a></p>
            <p><a href="#" target="_blank">📚 Recommended Reading</a></p>
            
            <p>This work demonstrates how pure mathematics can be both beautiful and practically relevant.</p>
        `
    },
    'algorithmic-bias': {
        title: 'Algorithmic Bias',
        date: 'July 2023',
        content: `
            <h2>Algorithmic Bias</h2>
            <p class="post-date">July 2023</p>
            
            <p>As artificial intelligence becomes increasingly integrated into our daily lives, understanding and addressing algorithmic bias has become one of the most critical challenges in technology.</p>
            
            <p>This piece examines how mathematical models can inadvertently perpetuate or help eliminate societal inequalities, and what we can do about it.</p>
            
            <h3>Key Issues Explored</h3>
            <ul>
                <li>Sources of bias in training data</li>
                <li>How algorithms can amplify existing inequalities</li>
                <li>Mathematical approaches to fairness</li>
                <li>Real-world case studies and their implications</li>
            </ul>
            
            <h3>Solutions and Approaches</h3>
            <ul>
                <li>Diverse teams in AI development</li>
                <li>Bias detection and mitigation techniques</li>
                <li>Ethical frameworks for AI deployment</li>
                <li>Ongoing monitoring and adjustment</li>
            </ul>
            
            <p>Understanding these issues is crucial for anyone working in AI and technology, as we have a responsibility to create systems that serve all people fairly.</p>
        `
    },
    'faith-at-work': {
        title: 'Faith at Work',
        date: 'April 2023',
        content: `
            <h2>Faith at Work</h2>
            <p class="post-date">April 2023</p>
            
            <p>Reflecting on the intersection of personal beliefs and professional life in academia, and how faith and science can coexist and enrich each other in meaningful ways.</p>
            
            <p>As someone pursuing a PhD in Applied Mathematics at Harvard while maintaining strong personal beliefs, I've found that faith and scientific inquiry are not opposing forces, but rather complementary aspects of understanding our world.</p>
            
            <h3>Key Reflections</h3>
            <ul>
                <li>The role of wonder and curiosity in both faith and science</li>
                <li>Finding meaning and purpose in academic work</li>
                <li>Building community in academic environments</li>
                <li>Navigating questions and doubts constructively</li>
            </ul>
            
            <h3>Personal Insights</h3>
            <p>My journey from Princeton to Harvard has been shaped not just by academic pursuits, but by a deeper search for meaning and purpose. This reflection explores how personal beliefs can provide strength and direction in the challenging world of academia.</p>
            
            <p>I believe that bringing our whole selves to our work - including our values and beliefs - makes us better researchers, teachers, and colleagues.</p>
        `
    },
    'tess-transit-timing': {
        title: 'TESS Transit Timing of Hundreds of Hot Jupiters',
        date: 'February 2022',
        content: `
            <h2>TESS Transit Timing of Hundreds of Hot Jupiters</h2>
            <p class="post-date">February 2022</p>
            
            <p>My research on exoplanet detection and analysis using NASA's TESS (Transiting Exoplanet Survey Satellite) mission data, focusing on the fascinating world of hot Jupiter exoplanets and their orbital characteristics.</p>
            
            <h3>Research Overview</h3>
            <p>This study involved analyzing transit timing variations (TTVs) in hot Jupiter systems observed by TESS. Hot Jupiters are gas giant planets that orbit very close to their host stars, completing an orbit in just a few days.</p>
            
            <h3>Key Findings</h3>
            <ul>
                <li>Analysis of transit timing precision across hundreds of systems</li>
                <li>Identification of potential TTV signals indicating additional planets</li>
                <li>Statistical analysis of orbital decay signatures</li>
                <li>Implications for planetary system architecture</li>
            </ul>
            
            <h3>Methodology</h3>
            <ul>
                <li>Data processing and light curve analysis</li>
                <li>Statistical modeling of transit times</li>
                <li>Machine learning approaches for signal detection</li>
                <li>Cross-validation with ground-based observations</li>
            </ul>
            
            <h3>Resources</h3>
            <p><a href="#" target="_blank">📄 Research Paper (arXiv)</a></p>
            <p><a href="#" target="_blank">💻 Code Repository</a></p>
            <p><a href="#" target="_blank">📊 Data Visualization Dashboard</a></p>
            
            <p>This work contributes to our understanding of planetary system dynamics and demonstrates the power of large-scale astronomical surveys.</p>
        `
    },
    'quantum-neural-networks': {
        title: 'Correspondence between Quantum Field Theory and Neural Networks',
        date: 'January 2022',
        content: `
            <h2>Correspondence between Quantum Field Theory and Neural Networks</h2>
            <p class="post-date">January 2022</p>
            
            <p>Investigating the surprising mathematical connections between quantum field theory and artificial neural networks, bridging theoretical physics and machine learning.</p>
            
            <h3>The Connection</h3>
            <p>Recent research has revealed deep mathematical parallels between the path integral formulation of quantum field theory and the training dynamics of neural networks. This correspondence opens up new avenues for understanding both domains.</p>
            
            <h3>Key Mathematical Insights</h3>
            <ul>
                <li>Path integral formulation and gradient descent</li>
                <li>Renormalization group flow and network depth</li>
                <li>Critical phenomena in both systems</li>
                <li>Symmetry breaking and feature learning</li>
            </ul>
            
            <h3>Practical Implications</h3>
            <ul>
                <li>New optimization algorithms inspired by physics</li>
                <li>Understanding generalization through statistical mechanics</li>
                <li>Phase transitions in learning dynamics</li>
                <li>Quantum-inspired neural network architectures</li>
            </ul>
            
            <h3>Future Directions</h3>
            <p>This interdisciplinary approach suggests new research directions that could benefit both theoretical physics and machine learning. The mathematical tools developed in one field can provide fresh insights into the other.</p>
            
            <h3>Resources</h3>
            <p><a href="#" target="_blank">📄 Technical Paper</a></p>
            <p><a href="#" target="_blank">🎥 Conference Presentation</a></p>
            <p><a href="#" target="_blank">📝 Mathematical Derivations</a></p>
            
            <p>This work exemplifies how interdisciplinary thinking can lead to breakthrough insights in both theoretical understanding and practical applications.</p>
        `
    }
};

// Function to open a post
function openPost(postId) {
    const post = posts[postId];
    if (post) {
        document.getElementById('postContent').innerHTML = post.content;
        document.getElementById('postModal').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Function to close the post modal
function closePost() {
    document.getElementById('postModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('postModal');
    if (event.target === modal) {
        closePost();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePost();
    }
});

