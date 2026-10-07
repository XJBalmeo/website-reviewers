const lessonsData = [
  {
    chapter: 'Chapter 1: Intro to Data Science',
    id: 'chapter-1-big-data',
    title: 'Big Data & Data Types',
    sections: [
      {
        heading: 'What is Big Data?',
        content: `
          <div class="section-banner" style="background-image: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80');">
            <h2>The Data Explosion</h2>
          </div>
          <div class="section-body">
            <p class="lead-text"><strong>Big Data</strong> refers to extremely large and complex amounts of data that are fundamentally difficult to collect, store, manage, and analyze using traditional Relational Database Management Systems (RDBMS) like MySQL, Oracle, or SQL Server.</p>
            
            <div class="alert alert-info">
              <div class="alert-icon">💡</div>
              <div class="alert-content">
                <strong>In simple terms:</strong>
                <p>Big Data = Data that is too large, too fast, or too complex for traditional tools to handle efficiently.</p>
              </div>
            </div>

            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">📈</span>
                <h4>Huge Volume</h4>
                <p>Organizations collect millions or even billions of records daily. For example, Facebook or TikTok generate millions of user activities every single day.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">⚡</span>
                <h4>High Velocity</h4>
                <p>Data arrives extremely quickly in real-time, such as streaming video, real-time sensor data, or rapid social media posts.</p>
              </div>
            </div>

            <h3 style="margin-top: 40px;">The Four (4) V's of Big Data:</h3>
            <p>Big Data is often categorized by these four foundational characteristics:</p>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">1</div>
                <div class="step-content">
                  <h4>Volume</h4>
                  <p><strong>How much data is there?</strong> Refers to the sheer size of the data generated.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">2</div>
                <div class="step-content">
                  <h4>Velocity</h4>
                  <p><strong>At what speed is new data generated?</strong> Refers to the rate at which data flows into an organization.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--warning);">3</div>
                <div class="step-content">
                  <h4>Variety</h4>
                  <p><strong>How diverse are the types of data?</strong> Data comes in all formats: structured numeric databases, unstructured text documents, video, audio, email, and stock ticker data.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-primary);">4</div>
                <div class="step-content">
                  <h4>Veracity</h4>
                  <p><strong>How accurate is the data?</strong> Refers to the trustworthiness, quality, and reliability of the data source.</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Structured vs. Unstructured Data',
        content: `
          <div class="section-body">
            <p class="lead-text">All data can generally be classified into two major categories based on its formatting and organization.</p>
            
            <div class="feature-grid">
              <div class="feature-box" style="border-top: 4px solid var(--success);">
                <span class="feature-icon">📊</span>
                <h4>Structured Data</h4>
                <p>Data that is easily analyzed and organized. It typically fits neatly into a predefined model with rows and columns (tables).</p>
                <ul class="styled-list" style="margin-top: 15px;">
                  <li><strong>Examples:</strong> SQL databases, Excel spreadsheets, CSV files, system logs, CRM/ERP records, POS transactions.</li>
                  <li><strong>Ease of Use:</strong> Easy to find, add, update, or delete. Highly organized and searchable.</li>
                  <li><strong>Scalability:</strong> Systems can easily handle increasing amounts by adding storage.</li>
                  <li><strong>Analytics:</strong> Perfect for SQL filtering and running basic machine learning algorithms.</li>
                </ul>
              </div>
              
              <div class="feature-box" style="border-top: 4px solid var(--warning);">
                <span class="feature-icon">📱</span>
                <h4>Unstructured Data</h4>
                <p>Information that does not follow a fixed or organized format. It makes up 80-90% of all data generated today.</p>
                <ul class="styled-list" style="margin-top: 15px;">
                  <li><strong>Examples:</strong> Word documents, Emails, Images, Video files, Audio recordings, Social Media posts, PDFs.</li>
                  <li><strong>Challenges:</strong> Extremely difficult for traditional relational databases to interpret. Requires complex storage.</li>
                  <li><strong>Analysis:</strong> Needs advanced specialized technologies like Natural Language Processing (NLP) or advanced Machine Learning to extract meaning (e.g., Sentiment analysis on a complaint email).</li>
                </ul>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    chapter: 'Chapter 1: Intro to Data Science',
    id: 'chapter-1-data-science',
    title: 'Data Mining vs Data Science',
    sections: [
      {
        heading: 'Mining vs Science',
        content: `
          <div class="section-banner" style="background-image: url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80');">
            <h2>Finding the Gold in Data</h2>
          </div>
          <div class="section-body">
            <p class="lead-text">Many people confuse Big Data, Data Mining, and Data Science. It's important to differentiate them accurately.</p>

            <div class="alert alert-warning">
              <div class="alert-icon">⛏️</div>
              <div class="alert-content">
                <strong>The Mountain Analogy</strong>
                <p>If <strong>Big Data</strong> is a huge mountain of information, <strong>Data Mining</strong> is the actual <em>process of digging</em> through that mountain to find valuable information, patterns, or trends.</p>
              </div>
            </div>

            <p><strong>Data Mining</strong> examines large amounts of raw data to discover useful relationships. For example, a supermarket using software to discover that "Customers who buy coffee often also buy biscuits", which helps them place products together to increase sales.</p>

            <h3 style="margin-top: 30px;">What is Data Science?</h3>
            <p><strong>Data Science</strong> is the overarching, broader study of data. It acts as a large umbrella that combines multiple disciplines to turn raw data into useful insights that help organizations understand situations and make better decisions.</p>
            
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">📐</span>
                <h4>Statistics & Math</h4>
                <p>Provides the formulas and statistical methods to analyze numbers, verify reliability, and determine trends.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🤖</span>
                <h4>Machine Learning</h4>
                <p>Allows computers to learn patterns from historical data and make future predictions.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🏥</span>
                <h4>Domain Knowledge</h4>
                <p>Deep understanding of the specific industry (e.g., healthcare, finance, retail) to properly interpret the results.</p>
              </div>
            </div>
            
            <div class="alert alert-success">
              <div class="alert-icon">🎯</div>
              <div class="alert-content">
                <strong>Ultimate Goal</strong>
                <p>The ultimate goal of data science is <strong>improving decision making.</strong> It is not just about collecting huge amounts of data, but using evidence to make informed choices across all business functions (Marketing, HR, Finance, Operations).</p>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Extracting Actionable Insights',
        content: `
          <div class="section-body">
            <p class="lead-text">Extracting patterns means looking at data and discovering something that happens repeatedly or has a meaningful relationship. But finding a pattern is not the final goal!</p>
            
            <div style="background: var(--bg-secondary); padding: 20px; border-radius: var(--radius-md); text-align: center; margin: 20px 0; border: 1px solid var(--bg-glass-border);">
              <h3 style="margin: 0; color: var(--accent-secondary);">DATA → ANALYSIS → INSIGHT → DECISION</h3>
            </div>
            
            <p>An <strong>insight</strong> is a useful understanding from data (e.g., "Students with low attendance tend to have lower grades"). However, an <strong>actionable insight</strong> is a finding that gives us enough useful information to actually decide <em>what action should be taken</em>.</p>
            
            <div class="alert alert-info">
              <div class="alert-icon">💡</div>
              <div class="alert-content">
                <strong>Golden Rule:</strong> Don't just find a pattern. Find a pattern that tells you what to do!
              </div>
            </div>

            <h3 style="margin-top: 40px;">Common Pattern Types</h3>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-primary);">1</div>
                <div class="step-content">
                  <h4>Clustering / Customer Segmentation</h4>
                  <p>Grouping entities that behave similarly without a predefined label. E.g., dividing 10,000 customers into "Budget Shoppers", "Premium Shoppers", and "Occasional Shoppers" based on their spending and frequency.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-secondary);">2</div>
                <div class="step-content">
                  <h4>Association-Rule Mining</h4>
                  <p>Discovering relationships between items that frequently occur together. Also known as Market Basket Analysis. E.g., discovering that Diapers and Baby Wipes are frequently bought in the same transaction.</p>
                </div>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    chapter: 'Chapter 1: Intro to Data Science',
    id: 'chapter-1-datasets',
    title: 'Entities, Attributes & Architecture',
    sections: [
      {
        heading: 'Data Elements',
        content: `
          <div class="section-body">
            <p class="lead-text">To work with data, we must first understand its foundational components: Entities and Attributes.</p>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">👤</span>
                <h4>Entity</h4>
                <p>The real-world person, object, or event we are interested in studying (e.g., a specific Student like Maria, a specific Product, or a specific Transaction).</p>
                <p style="margin-top:10px; font-size: 0.85rem; color: var(--info);"><em>Who or what are we studying?</em></p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🏷️</span>
                <h4>Attribute (Feature / Variable)</h4>
                <p>A characteristic or property that describes an entity (e.g., Age, Location, Course, Total Spent). The terms attribute, feature, and variable are used interchangeably.</p>
                <p style="margin-top:10px; font-size: 0.85rem; color: var(--info);"><em>What do we know about it?</em></p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🗂️</span>
                <h4>Data Set</h4>
                <p>A collection of related data organized together. Usually represented as a table, or an <strong>N × M Data Matrix</strong> where N = rows (Entities) and M = columns (Attributes).</p>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'The Analytics Record & Data Management',
        content: `
          <div class="section-body">
            <p class="lead-text">Before a data scientist can discover patterns or build machine learning models, the data must first be collected and organized into an <strong>Analytics Record</strong>.</p>
            
            <p>An Analytics Record is the master table prepared for analysis. <strong>It takes the most time and effort</strong> because real-world data is inherently messy. Data scientists must deal with:</p>
            <ul class="styled-list">
              <li>Missing values</li>
              <li>Duplicate records</li>
              <li>Incorrect information</li>
              <li>Spelling inconsistencies</li>
              <li>Data scattered across different systems and formats (e.g., Database vs Excel vs CSV).</li>
            </ul>

            <div class="alert alert-warning">
              <div class="alert-icon">🍳</div>
              <div class="alert-content">
                <strong>Analogy:</strong> The analytics record is like preparing all your ingredients before cooking. You cannot properly analyze data until it has been collected, cleaned, organized, and combined from its many sources.
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Data Architecture Ecosystem',
        content: `
          <div class="section-body">
            <p class="lead-text">Data science relies on a massive ecosystem of tools from multiple software suppliers. The specific tools used depend entirely on the organization's size.</p>
            
            <div class="feature-grid">
              <div class="feature-box">
                <h4>Small Organizations</h4>
                <p>Use simpler tools for smaller data sets. Example: Excel + SQL + Python.</p>
              </div>
              <div class="feature-box">
                <h4>Large Organizations</h4>
                <p>Need powerful, complex ecosystems for massive data. Example: SQL + Python + Hadoop/Spark + Cloud Storage (AWS/Google) + BI Tools (Tableau/PowerBI).</p>
              </div>
            </div>

            <h3 style="margin-top: 40px;">Architecture Components:</h3>
            <p>Regardless of size, a typical data architecture involves three main areas:</p>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">1</div>
                <div class="step-content">
                  <h4>Data Sources</h4>
                  <p>Where all data is generated. This includes Traditional Sources / OLTP (Online Transaction Processing like CRM, ERP, Invoicing) and Big Data Sources (Social media, weblogs, sensors).</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">2</div>
                <div class="step-content">
                  <h4>Data Storage</h4>
                  <p>Where data is stored and processed. This includes traditional RDBMS and Data Warehouses, or Big Data solutions like Hadoop.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-secondary);">3</div>
                <div class="step-content">
                  <h4>Applications</h4>
                  <p>Where data is shared with consumers. This includes Business Intelligence (BI) tools (for data aggregating, integration, reporting) and custom applications.</p>
                </div>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    chapter: 'Chapter 2: Life Cycle',
    id: 'chapter-2-lifecycle-p1-p2',
    title: 'Phases 1 & 2',
    sections: [
      {
        heading: 'The Data Science Roadmap',
        content: `
          <div class="section-banner" style="background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80');">
            <h2>Iterative Discovery</h2>
          </div>
          <div class="section-body">
            <p class="lead-text">The Data Science Project Life Cycle is an iterative process of research and discovery that guides a project from start to finish. It is not always a straight line; scientists often move back and forth between tasks.</p>
            <p><strong>Benefits:</strong> It provides a clear framework, improves communication between teams and customers, uses standardized templates (artifacts), and reduces misunderstandings.</p>
          </div>
        `
      },
      {
        heading: 'Phase 1: Business Requirements',
        content: `
          <div class="section-body">
            <p class="lead-text">The first and most important phase. The data scientist works closely with customers and stakeholders to clearly understand the business problem.</p>
            <div class="alert alert-info">
              <div class="alert-icon">🔍</div>
              <div class="alert-content">
                <strong>Golden Rule</strong>
                <p>"Know the problem before solving it." Ask "Why?" repeatedly to uncover the real issue before ever touching the data.</p>
              </div>
            </div>
            
            <h3 style="margin-top: 30px;">Key Goals:</h3>
            <ul class="styled-list">
              <li>Identify the main problem and root cause.</li>
              <li><strong>Identify Key Variables:</strong> Determine which specific variables will be the targets of the predictive model. These measure project success.</li>
              <li><strong>Identify Data Sources:</strong> Determine where the necessary data will come from (what the business has access to vs what needs to be obtained).</li>
              <li><strong>Ask the right questions:</strong> Determine if you are answering "How much?" (Regression), "Which category?" (Classification), or "Which group?" (Clustering).</li>
            </ul>
            
            <h3 style="margin-top: 30px;">Phase 1 Deliverables:</h3>
            <div class="tags-container">
              <span class="tag">Charter Document (living document)</span>
              <span class="tag">Data Sources Specification</span>
              <span class="tag">Data Dictionaries (schemas & diagrams)</span>
            </div>
          </div>
        `
      },
      {
        heading: 'Phase 2: Data Acquisition & Understanding',
        content: `
          <div class="section-body">
            <p class="lead-text">This phase involves ingesting data from source locations into target locations (like a data warehouse). This is generally done through an automated <strong>ETL pipeline</strong>.</p>
            
            <div class="step-list">
              <div class="step-item">
                <div class="step-number">E</div>
                <div class="step-content">
                  <h4>Extract</h4>
                  <p>Pull raw data from multiple sources (MySQL, PostgreSQL, web APIs, Excel, CSVs via Parsers, Web Scraping).</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">T</div>
                <div class="step-content">
                  <h4>Transform</h4>
                  <p>Cleanse, format, and structure data as per business logic to make it usable.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">L</div>
                <div class="step-content">
                  <h4>Load</h4>
                  <p>Transfer the processed data into the target environment/repository for analysis.</p>
                </div>
              </div>
            </div>
            
            <p style="margin-top:20px;">After ingestion, data scientists <strong>explore and audit the data</strong> to verify its quality using summarization and visualization utilities.</p>

            <h3 style="margin-top: 30px;">Phase 2 Deliverables:</h3>
            <div class="tags-container" style="margin-top: 10px;">
              <span class="tag">Data Quality Report (data summaries, variable ranking)</span>
              <span class="tag">Solution Architecture (diagram of data pipeline)</span>
              <span class="tag">Checkpoint Decision (is value sufficient to continue?)</span>
            </div>
          </div>
        `
      }
    ]
  },
  {
    chapter: 'Chapter 2: Life Cycle',
    id: 'chapter-2-lifecycle-p3-p4',
    title: 'Phases 3 & 4',
    sections: [
      {
        heading: 'Phase 3: Data Modeling',
        content: `
          <div class="section-banner" style="background-image: url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80');">
            <h2>Analytical Precision</h2>
          </div>
          <div class="section-body">
            <p class="lead-text">Transforming your understanding of the data into a structured mathematical/statistical design. This is where analytical thinking meets precision to choose the optimal features and create an accurate machine learning model.</p>
            
            <h3>Feature Engineering</h3>
            <p>The art of transforming raw data into meaningful inputs. <em>"Better data beats better algorithms."</em> It includes Inclusion, Aggregation, and Feature Selection.</p>
            
            <h4>Feature Selection Methods:</h4>
            <div class="feature-grid">
              <div class="feature-box">
                <h4>Filter-Based</h4>
                <p>Selects features using statistical metrics without a predictive model. (e.g., Correlation, Chi-Square, ANOVA). Use case: Quick, simple, high-dimensional data.</p>
              </div>
              <div class="feature-box">
                <h4>Wrapper-Based</h4>
                <p>Treats selection as a search problem by training models to evaluate subsets (Recursive Elimination, Forward/Backward Selection). Use case: More accurate but computationally expensive.</p>
              </div>
              <div class="feature-box">
                <h4>Embedded</h4>
                <p>Uses algorithms with built-in feature selection during the training process itself (LASSO/L1, Ridge/L2).</p>
              </div>
            </div>

            <h4 style="margin-top: 30px;">Dealing with Data Issues (Transformations):</h4>
            <ul class="styled-list">
              <li><strong>Skewed Data:</strong> Adjust distributions using log or power transforms to achieve symmetry.</li>
              <li><strong>Bias Mitigation:</strong> Ensure data doesn't favor one group unfairly.</li>
              <li><strong>Binning:</strong> Group continuous values into discrete intervals for easier interpretation.</li>
              <li><strong>Outlier Detection:</strong> Prevent model bias. Methods include <strong>Trimming</strong> (removing extreme values), <strong>Winsorizing</strong> (capping values at a boundary), and <strong>Imputation</strong> (substituting outliers with median/mean).</li>
            </ul>

            <h3 style="margin-top: 40px;">Model Training Process</h3>
            <ul class="styled-list">
              <li><strong>Split Data:</strong> Randomly divide data into a training set and a test set.</li>
              <li><strong>Build Models:</strong> Create a baseline model, then increase complexity.</li>
              <li><strong>Evaluate:</strong> Test algorithms on the test set. Use <strong>Hyperparameter Tuning</strong> to optimize.</li>
              <li><strong>Prevent Overfitting:</strong> Use techniques like <strong>Cross-Validation</strong> to ensure the model generalizes well.</li>
            </ul>

            <div class="tags-container" style="margin-top: 20px;">
              <span class="tag">Deliverable: Data Model Diagram</span>
              <span class="tag">Deliverable: Model Specification Document</span>
              <span class="tag">Deliverable: Validation Report</span>
            </div>
          </div>
        `
      },
      {
        heading: 'Phase 4: Deployment',
        content: `
          <div class="section-body">
            <p class="lead-text">The final step where the model moves from development into a production or production-like environment.</p>
            
            <div class="alert alert-success">
              <div class="alert-icon">🚀</div>
              <div class="alert-content">
                <strong>Goal: Operationalize the Model</strong>
                <p>Make it usable and accessible for end-users or applications so that predictions can be integrated into everyday workflows.</p>
              </div>
            </div>
            
            <h3 style="margin-top: 30px;">Key Activities:</h3>
            <ul class="styled-list">
              <li><strong>Model Operationalization:</strong> Convert the trained model into a deployable format (container or API) ensuring scalability and security.</li>
              <li><strong>API Exposure:</strong> The model is exposed through an open API interface, allowing integration with Websites, Dashboards, Spreadsheets, and Backend applications.</li>
              <li><strong>User Acceptance Testing (UAT):</strong> End-users validate the model's performance. Inaccuracies are fixed before full release.</li>
            </ul>
            
            <div class="tags-container" style="margin-top: 20px;">
              <span class="tag">Deliverable: Status Dashboard</span>
              <span class="tag">Deliverable: Final Modeling Report</span>
              <span class="tag">Deliverable: Solution Architecture Document</span>
            </div>
          </div>
        `
      }
    ]
  },
  {
    chapter: 'Chapter 3: R Programming',
    id: 'chapter-3-r-basics',
    title: 'R Studio & Data Types',
    sections: [
      {
        heading: 'Introduction to R and R Studio',
        content: `
          <div class="section-banner" style="background-image: url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80');">
            <h2>Programming in R</h2>
          </div>
          <div class="section-body">
            <p class="lead-text"><strong>R Studio</strong> is an application that lays on top of the R language to make interacting with R easier, more organized, and a lot more fun. It provides a much better coding experience than the native R terminal.</p>
            
            <h3>Interface Components of R Studio:</h3>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">💻</span>
                <h4>R Console</h4>
                <p>Shows the output of the code you run. You can also directly write code here, but it cannot be easily traced later.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">📝</span>
                <h4>R Script</h4>
                <p>Space to write, save, and edit codes. Select lines and press <code>Ctrl + Enter</code> to run.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🌍</span>
                <h4>R Environment</h4>
                <p>Displays loaded external elements like datasets, variables, and vectors. Always check here to see if data loaded properly!</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">📊</span>
                <h4>Graphical Output</h4>
                <p>Displays graphs created during exploratory data analysis, loaded packages, and official documentation/help.</p>
              </div>
            </div>

            <div class="alert alert-info" style="margin-top: 30px;">
              <div class="alert-icon">🔧</div>
              <div class="alert-content">
                <strong>Variables in R:</strong>
                <p>To save calculations, you create variables using the <code><-</code> or <code>=</code> sign. Variables can be alphabetical or alphanumeric, but they <strong>cannot</strong> be numeric names.<br><br><code>> x <- 8 + 7</code><br><code>> x</code><br><code>[1] 15</code></p>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Data Types & Structures in R',
        content: `
          <div class="section-body">
            <p class="lead-text">Everything we see or create in R is treated as an <strong>object</strong>. To manipulate objects effectively, you must understand their basic data types and structures.</p>
            
            <h3>5 Basic Classes of Objects (Data Types):</h3>
            <ul class="styled-list">
              <li><strong>Character:</strong> Text strings (e.g., <code>"a"</code>, <code>"swc"</code>)</li>
              <li><strong>Numeric:</strong> Real or decimal numbers (e.g., <code>2</code>, <code>15.2</code>)</li>
              <li><strong>Integer:</strong> Whole numbers (e.g., <code>2L</code> - the 'L' tells R to store it as an integer)</li>
              <li><strong>Complex:</strong> Complex numbers with real and imaginary parts (e.g., <code>1+4i</code>)</li>
              <li><strong>Logical:</strong> Boolean values (<code>True</code> or <code>False</code>)</li>
            </ul>

            <h3 style="margin-top: 40px;">Object Attributes & Inspection:</h3>
            <p>Attributes are an identifier or metadata attached to an object. R provides functions to examine these:</p>
            <div class="tags-container">
              <span class="tag"><code>class()</code> - High-level object type</span>
              <span class="tag"><code>typeof()</code> - Low-level data type</span>
              <span class="tag"><code>length()</code> - How long is it?</span>
              <span class="tag"><code>attributes()</code> - Extracted metadata / dimensions</span>
            </div>

            <h3 style="margin-top: 40px;">Data Structures:</h3>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">V</div>
                <div class="step-content">
                  <h4>Vectors (Atomic Vectors)</h4>
                  <p>A vector combines elements, created using the <code>c()</code> concatenate command. <strong>Atomic vectors</strong> only hold data of a <em>single data type</em>. <br><br><strong>Coercion:</strong> If you mix different data types in a vector, R forces (coerces) them into one class (e.g., numbers turn into characters). You can manually convert classes using commands like <code>as.numeric()</code>, but be careful as this may introduce <code>NA</code>s.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">L</div>
                <div class="step-content">
                  <h4>Lists</h4>
                  <p>A special type of vector that <strong>can</strong> contain elements of <em>different data types</em>. When outputted, elements are separated by double brackets like <code>[[1]]</code> indicating their index.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--warning);">M</div>
                <div class="step-content">
                  <h4>Matrices</h4>
                  <p>A 2-dimensional data structure consisting of rows and columns. It is formed when a vector is given a dimension attribute. Like vectors, a matrix consists of elements of the <em>same class</em>.<br><br><code>my_matrix <- matrix(1:6, nrow=3, ncol=2)</code></p>
                </div>
              </div>
            </div>
            
            <div class="alert alert-success" style="margin-top: 30px;">
              <div class="alert-icon">🔄</div>
              <div class="alert-content">
                <strong>Basic Handling of Data in R</strong>
                <p><strong>Split:</strong> splitting and selecting.<br><strong>Apply:</strong> transforming and re-calculating.<br><strong>Combine:</strong> aggregating and merging.</p>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    chapter: 'Chapter 3: R Programming',
    id: 'chapter-3-r-regression',
    title: 'Regression & ANOVA in R',
    sections: [
      {
        heading: 'Linear Regression in R',
        content: `
          <div class="section-banner" style="background-image: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80');">
            <h2>Predictive Modeling</h2>
          </div>
          <div class="section-body">
            <p class="lead-text">Regression allows us to investigate relationships between variables. Specifically, does an explanatory variable (X) explain the response variable (Y)?</p>
            
            <div class="alert alert-info">
              <div class="alert-icon">📊</div>
              <div class="alert-content">
                <strong>The <code>lm()</code> Command</strong>
                <p>We fit a linear regression in R using the <code>lm()</code> (linear model) command. The syntax uses a tilde <code>~</code> which reads as "is explained by" or "as a function of".</p>
                <p style="margin-top: 10px;"><code>model <- lm(LungCap ~ Age, data = LungCapData)</code></p>
                <p style="font-size: 0.9em; margin-top: 5px;"><em>"Model Lung Capacity (Y) using Age (X) from the dataset LungCapData"</em></p>
              </div>
            </div>

            <h3>Numeric vs Categorical Predictors:</h3>
            <ul class="styled-list">
              <li><strong>Numeric (e.g., Age):</strong> A classic simple linear regression. The model produces an estimated intercept and an estimated slope. The slope tells us how much Y changes for a one-unit increase in X.</li>
              <li><strong>Categorical (e.g., Smoker Yes/No):</strong> R handles categorical variables using <em>factor/dummy coding</em>. It compares the categories against a "reference category". This is conceptually close to comparing group means (like a t-test).</li>
            </ul>
          </div>
        `
      },
      {
        heading: 'Model Summaries & Analysis',
        content: `
          <div class="section-body">
            <p class="lead-text">Once a model is built, we extract insights using the <code>summary(model)</code> and <code>anova(model)</code> commands.</p>
            
            <h3>Understanding the Regression Summary:</h3>
            <div class="feature-grid">
              <div class="feature-box">
                <h4>Coefficients & p-values</h4>
                <p>The summary provides the estimate of the intercept and slope, their standard errors, test statistics, and p-values. Asterisks (<code>*</code>) identify <strong>statistically significant coefficients</strong>.</p>
              </div>
              <div class="feature-box">
                <h4>Residual Standard Error</h4>
                <p>A measure of the variation of observations around the regression line (Root-MSE). A lower value indicates a better fit.</p>
              </div>
              <div class="feature-box">
                <h4>Extracting Attributes</h4>
                <p>You can see what attributes are stored in the model using <code>attributes(model)</code> and extract them specifically using the dollar sign (e.g., <code>model$coef</code> or just <code>coef(model)</code>).</p>
              </div>
            </div>

            <h3 style="margin-top: 40px;">ANOVA (Analysis of Variance)</h3>
            <p>An ANOVA table is used to determine whether there is a <strong>statistically significant difference among group means</strong>. It asks: <em>"Are the differences we see between groups large enough that they are unlikely to be due to random variation?"</em></p>
            
            <div class="alert alert-warning">
              <div class="alert-icon">📈</div>
              <div class="alert-content">
                <strong>How it works:</strong>
                <p>ANOVA breaks the total variation in the data into <em>variation between groups</em> and <em>variation within groups</em>. It then uses the <strong>F-test</strong> and <strong>p-value</strong> to determine if the group means differ statistically.</p>
                <p style="margin-top: 10px;">Command: <code>anova(model)</code></p>
              </div>
            </div>
            
            <h3>The Full Workflow in R:</h3>
            <div class="tags-container" style="background: var(--bg-secondary); padding: 15px; border-radius: var(--radius-md);">
              <span class="tag">1. <code>read_excel()</code> (Import)</span> →
              <span class="tag">2. <code>View()</code> (Explore)</span> →
              <span class="tag">3. <code>lm(Y ~ X)</code> (Model)</span> →
              <span class="tag">4. <code>summary()</code> (Interpret)</span> →
              <span class="tag">5. <code>anova()</code> (Test Means)</span>
            </div>
            <p style="margin-top: 15px; font-size: 0.9em; color: var(--text-muted);"><em>Tip: Access the Help menu anytime by typing <code>help(command)</code> or simply <code>?command</code>.</em></p>
          </div>
        `
      }
    ]
  },
  {
    chapter: 'Reference',
    id: 'cheat-sheet',
    title: 'Cheat Sheet / Glossary',
    sections: [
      {
        heading: 'Master Glossary of Terms',
        content: `
          <div class="section-body">
            <p class="lead-text">A comprehensive tabular guide containing all major terminology and concepts covered across all chapters.</p>
            
            <div style="overflow-x: auto;">
              <table class="data-table">
                <thead>
                  <tr>
                    <th style="width: 20%;">Term</th>
                    <th style="width: 20%;">Chapter</th>
                    <th style="width: 60%;">Definition & Context</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Chapter 1 Terms -->
                  <tr>
                    <td><strong>Big Data</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Data that is too large, fast, or complex for traditional Relational Databases (RDBMS) to handle efficiently.</td>
                  </tr>
                  <tr>
                    <td><strong>The 4 V's</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Volume (how much), Velocity (what speed), Variety (what formats), Veracity (how accurate).</td>
                  </tr>
                  <tr>
                    <td><strong>Structured Data</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Information formatted into tables with rows and columns. Easily searchable. (e.g., CSV, SQL).</td>
                  </tr>
                  <tr>
                    <td><strong>Unstructured Data</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Data with no fixed format. Makes up 80-90% of data today. Harder to analyze. (e.g., Emails, Images, Video).</td>
                  </tr>
                  <tr>
                    <td><strong>Data Mining</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>The specific process of digging through raw datasets to discover hidden patterns and relationships.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Science</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>The broader study combining Stats, Math, Machine Learning, and Domain Knowledge. <em>Goal: Improving decision making.</em></td>
                  </tr>
                  <tr>
                    <td><strong>Actionable Insight</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>A finding from data analysis that provides enough information to actually decide what action should be taken.</td>
                  </tr>
                  <tr>
                    <td><strong>Entity</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>The real-world person, object, or event being studied (The "Who/What").</td>
                  </tr>
                  <tr>
                    <td><strong>Attribute / Feature</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>A characteristic describing an entity. Synonymous with "Variable".</td>
                  </tr>
                  <tr>
                    <td><strong>Data Set / Matrix</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>An organized collection of data, modeled as an N × M matrix (N = rows/entities, M = columns/attributes).</td>
                  </tr>
                  <tr>
                    <td><strong>Analytics Record</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>The consolidated, cleaned master table prepared for analysis. Gathering this takes the most effort.</td>
                  </tr>

                  <!-- Chapter 2 Terms -->
                  <tr>
                    <td><strong>Charter Document</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>A living document from the Business Requirements phase that gets updated as new data/requirements arise.</td>
                  </tr>
                  <tr>
                    <td><strong>ETL Pipeline</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Stands for Extract (pull), Transform (clean/format), Load (transfer). The core of Data Acquisition.</td>
                  </tr>
                  <tr>
                    <td><strong>Feature Engineering</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>The art of transforming raw data into meaningful inputs. Includes feature selection (Filter, Wrapper, Embedded).</td>
                  </tr>
                  <tr>
                    <td><strong>Binning</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>A transformation technique that groups continuous values into discrete intervals.</td>
                  </tr>
                  <tr>
                    <td><strong>Outlier Mitigation</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Handling extreme values via Trimming (removing), Winsorizing (capping), or Imputation (substituting).</td>
                  </tr>
                  <tr>
                    <td><strong>Operationalization</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>The final deployment goal: Making the model usable/accessible for end-users via APIs or dashboards.</td>
                  </tr>

                  <!-- Chapter 3 Terms -->
                  <tr>
                    <td><strong>R Studio</strong></td>
                    <td><span class="tag" style="background: rgba(139,92,246,0.1); color: var(--accent-secondary);">Chapter 3</span></td>
                    <td>An application overlaying the R language for better coding experience. Key parts: Console, Script, Environment, Graphs.</td>
                  </tr>
                  <tr>
                    <td><strong>Coercion</strong></td>
                    <td><span class="tag" style="background: rgba(139,92,246,0.1); color: var(--accent-secondary);">Chapter 3</span></td>
                    <td>When mixing data types in an atomic vector, R forces (coerces) them into a single data type.</td>
                  </tr>
                  <tr>
                    <td><strong>Vector vs List</strong></td>
                    <td><span class="tag" style="background: rgba(139,92,246,0.1); color: var(--accent-secondary);">Chapter 3</span></td>
                    <td><strong>Vectors</strong> hold elements of the <em>same type</em>. <strong>Lists</strong> hold elements of <em>different types</em>.</td>
                  </tr>
                  <tr>
                    <td><strong>lm(Y ~ X)</strong></td>
                    <td><span class="tag" style="background: rgba(139,92,246,0.1); color: var(--accent-secondary);">Chapter 3</span></td>
                    <td>Linear Model function in R. The tilde (~) means "is explained by". (e.g. Lung Capacity is explained by Age).</td>
                  </tr>
                  <tr>
                    <td><strong>Dummy Coding</strong></td>
                    <td><span class="tag" style="background: rgba(139,92,246,0.1); color: var(--accent-secondary);">Chapter 3</span></td>
                    <td>How R handles Categorical predictors (like Smoker Yes/No), comparing them against a reference category.</td>
                  </tr>
                  <tr>
                    <td><strong>Residual Std Error</strong></td>
                    <td><span class="tag" style="background: rgba(139,92,246,0.1); color: var(--accent-secondary);">Chapter 3</span></td>
                    <td>A measure of the variation of observations around the regression line (Root-MSE).</td>
                  </tr>
                  <tr>
                    <td><strong>ANOVA</strong></td>
                    <td><span class="tag" style="background: rgba(139,92,246,0.1); color: var(--accent-secondary);">Chapter 3</span></td>
                    <td>Analysis of Variance. Uses the F-test to determine if there is a statistically significant difference among group means.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
        `
      }
    ]
  }
];
