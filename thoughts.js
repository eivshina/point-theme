// Post data with full content and links
const posts = {
    'cuplength': {
        title: 'Doughnut or Mickey Mouse? Detecting Toroidal Structure in Data through Persistent Cup-Length',
        date: 'July 2025',
        content: `
            <h2>Doughnut or Mickey Mouse? Detecting Toroidal Structure in Data through Persistent Cup-Length</h2>
            <p class="post-date">July 2023</p>
            
            <p>I implemented and provided theoretical proof for persistent cup-length algorithm, a cohomology-based method that
extends persistent homology to capture interactions between topological features in data. This work demonstrated
toroidal structure in grid cell population activity—providing robust evidence for continuous attractor network
(CAN) models underlying spatial navigation</p>

           
            
            <h3>Resources</h3>
            <p><a href="https://arxiv.org/pdf/2507.11151" target="_blank">🔗 Read paper</a></p>
            <p><a href="https://github.com/eivshina/persistent-cup-length" target="_blank">📝 GitHub</a></p>
            <p><a href="https://youtu.be/qnSswodCi98?si=aCRn3gCUvYAhq2c6" target="_blank">🎤 Informal talk</a></p>
            
            <p>This experienced made me a more confident mathematician and computer scientist, having implemented an entire algorithm from scratch and proven a theorem about its usefulness.</p>
        `
    },
    'hardmath': {
        title: 'A Gentle Introduction to Knot Theory',
        date: 'July 2023',
        content: `
            <h2>A Gentle Introduction to Knot Theory</h2>
            <p class="post-date">July 2023</p>
            
            <p>This paper introduces a dataset of challenging applied math problems for LLMs. It was written as part of the Physical Mathematics graduate course at Harvard University.</p>
            
 
            
            <h3>Resources</h3>
            <p><a href="https://arxiv.org/abs/2505.11774" target="_blank">🔗 Read paper</a></p>
         
            
            <p>This work draws attention to the question of how mathematics should be taught in the age of AI.</p>
        `
    },
    'patterns': {
        title: 'Patterns in Knot Floer Homology',
        date: 'July 2023',
        content: `
            <h2>Patterns in Knot Floer Homology</h2>
            <p class="post-date">July 2023</p>
            
            <p>This paper formulate 3 conjectures relating the hyperbolic volume of knot's complement, the knot determinant, and the total rank of knot Floer homology.</p>
            

            
            
            <h3>Resources</h3>
            <p><a href="https://arxiv.org/abs/2307.03297" target="_blank">🔗 Read paper</a></p>
            <p><a href="https://github.com/eivshina/patterns-in-knot-floer-homology" target="_blank">📝 GitHub</a></p>
            <p><a href="https://zenodo.org/records/7879466" target="_blank">🎤 Dataset </a></p>
            
        `
    },
    'thesis': {
        title: 'On slice knots and patterns in knot Floer homology',
        date: 'May 2023',
        content: `
            <h2>On slice knots and patterns in knot Floer homology</h2>
            <p class="post-date">May 2023</p>
            
            <p> I have studied slice knots and patterns in knot Floer homology under Zoltan Szabo for my A+ senior thesis at Princeton University.</p>
             <p>  In this thesis, I consider two distinct research problems in knot theory: how knot invariants detect knot sliceness and how hyperbolic and homological measures of knot complexity are related. I establish three new conjectures focused on the hyperbolic volume of the knot complement and knot cohomology.</p>

             <h3>Resources</h3>
            <p><a href="https://dataspace.princeton.edu/handle/88435/dsp01m039k816h" target="_blank">🔗 Read thesis</a></p>
    },
    'tess-transit-timing': {
        title: 'TESS Transit Timing of Hundreds of Hot Jupiters',
        date: 'February 2022',
        content: `
            <h2>TESS Transit Timing of Hundreds of Hot Jupiters</h2>
            <p class="post-date">February 2022</p>
            
            <p>My research on exoplanet detection and analysis using NASA's TESS (Transiting Exoplanet Survey Satellite) mission data, focusing on the fascinating world of hot Jupiter exoplanets and their orbital characteristics.</p>
            
            <h3>Research Overview</h3>
            <p>This study involved analyzing transit timing variations (TTVs) in hot Jupiter systems observed by NASA's TESS (Transiting Exoplanet Survey Satellite). Hot Jupiters are gas giant planets that orbit very close to their host stars, completing an orbit in just a few days.</p>

            <p>I searched for evidence of orbital period changes in 382 exoplanets. My contribution was developing a parallelized code to fit transit models to TESS light curves and scrape timing data from ArXiv, which helped us discover transit timing variations and detect a new planet, NGTS-11c.</p>
  
            <h3>Resources</h3>
            <p><a href="https://iopscience.iop.org/article/10.3847/1538-4365/ac545b/meta" target="_blank">🔗 Read paper (arXiv)</a></p>
            <p><a href="https://github.com/transit-timing/tt" target="_blank">💻 Code Repository</a></p>
            <p><a href="transit-timing.github.io" target="_blank">📊 Website</a></p>
            
            <p>This work contributes to our understanding of planetary system dynamics.</p>
        `
    },
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

