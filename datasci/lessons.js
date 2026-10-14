const lessonsData = [
  {
    chapter: 'Chapter 1: Intro to Data Science',
    id: 'chapter-1-big-data',
    title: 'Big Data & Data Types',
    sections: [
      {
        heading: 'What is Big Data?',
        content: `
          <div class="section-banner banner-blue">
            <div class="banner-overlay">
              <span class="banner-kicker">Lesson 1 • Big Data & Data Science</span>
              <h2>The Data Explosion</h2>
            </div>
          </div>
          <div class="section-body">
            <p class="lead-text"><strong>Big Data</strong> refers to extremely large and complex amounts of data that are difficult to collect, store, manage, and analyze using traditional database systems such as <strong>RDBMS (Relational Database Management Systems)</strong> like MySQL, Oracle, or SQL Server.</p>
            
            <div class="alert alert-info">
              <div class="alert-icon">💡</div>
              <div class="alert-content">
                <strong>In simple terms:</strong>
                <p>Big Data = Data that is too large, too fast, or too complex for traditional database tools to handle efficiently.</p>
              </div>
            </div>

            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">📈</span>
                <h4>Huge Volume</h4>
                <p>Organizations collect millions or even billions of records daily. Platforms like Facebook or TikTok generate millions of user activities every single day.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">⚡</span>
                <h4>High Velocity</h4>
                <p>Data arrives extremely quickly in real-time, such as streaming video, real-time sensor data, or rapid social media posts.</p>
              </div>
            </div>

            <h3>The Four (4) V's of Big Data</h3>
            <p>Big Data is characterized by four foundational dimensions:</p>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">1</div>
                <div class="step-content">
                  <h4>Volume</h4>
                  <p><strong>Means how much data is there?</strong> Refers to the sheer size and scale of data generated.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">2</div>
                <div class="step-content">
                  <h4>Velocity</h4>
                  <p><strong>Means at what speed is new data generated?</strong> Refers to the rate at which new data flows into an organization.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--warning);">3</div>
                <div class="step-content">
                  <h4>Variety</h4>
                  <p><strong>Means how diverse are different types of data?</strong> Data comes in all formats that may be structured, numeric in the traditional database, or unstructured text documents, video, audio, email, and stock ticker data.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-primary);">4</div>
                <div class="step-content">
                  <h4>Veracity</h4>
                  <p><strong>Means how accurate is the data?</strong> Refers to the trustworthiness, quality, and reliability of the data.</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Forms of Big Data: Structured vs. Unstructured',
        content: `
          <div class="section-body">
            <p class="lead-text">Big Data comes in two main <strong>forms</strong>: <strong>Structured Data</strong> and <strong>Unstructured Data</strong>.</p>
            
            <div class="feature-grid">
              <div class="feature-box" style="border-top: 4px solid var(--success);">
                <span class="feature-icon">📊</span>
                <h4>Structured Data</h4>
                <p>More easily analyzed and organized into the database. Typically, data that can be stored in a table, and every instance in the table has the same structure (i.e., set of attributes).</p>
                <h4 style="margin-top: 16px; font-size: 0.95rem; color: var(--accent-primary);">Benefits of Structured Data:</h4>
                <ul class="styled-list" style="margin-top: 10px;">
                  <li><strong>Ease of Use:</strong> Easy to find, add, update, or delete. Highly organized and searchable.</li>
                  <li><strong>Scalability:</strong> Systems can easily handle increasing amounts by adding storage.</li>
                  <li><strong>Analytics:</strong> Easily queried with SQL and ready for statistical and machine learning models.</li>
                </ul>
              </div>
              
              <div class="feature-box" style="border-top: 4px solid var(--warning);">
                <span class="feature-icon">📱</span>
                <h4>Unstructured Data</h4>
                <p>Data that does not follow a fixed or organized format, such as rows and columns in a traditional database. It makes up 80–90% of all data generated today.</p>
                <ul class="styled-list" style="margin-top: 15px;">
                  <li><strong>Examples:</strong> Text documents, video, audio, email, stock ticker data, social media posts, PDFs.</li>
                  <li><strong>Challenges:</strong> Difficult for traditional relational databases to store and interpret directly.</li>
                  <li><strong>Analysis:</strong> Requires specialized techniques like Natural Language Processing (NLP) or computer vision to extract meaning.</li>
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
        heading: 'Data Mining vs. Data Science',
        content: `
          <div class="section-banner banner-purple">
            <div class="banner-overlay">
              <span class="banner-kicker">Lesson 1 • Core Disciplines</span>
              <h2>Finding the Gold in Data</h2>
            </div>
          </div>
          <div class="section-body">
            <p class="lead-text">Understanding how <strong>Big Data</strong>, <strong>Data Mining</strong>, and <strong>Data Science</strong> relate to one another is essential for any data practitioner.</p>

            <div class="alert alert-warning">
              <div class="alert-icon">⛏️</div>
              <div class="alert-content">
                <strong>Data Mining Definition</strong>
                <p><strong>Data Mining</strong> is the process of examining large amounts of raw data to discover useful information, patterns, relationships, or trends. If Big Data is a mountain of information, Data Mining is the process of digging through it to find valuable insights.</p>
              </div>
            </div>

            <h3>What is Data Science?</h3>
            <p><strong>Data Science</strong> is the study of data to discover useful information, patterns, and insights that can help us understand a situation and make better decisions.</p>
            
            <h4>Fields Combined in Data Science:</h4>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">📊</span>
                <h4>Statistics</h4>
                <p>Helps us analyze numbers and determine patterns or trends.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">📐</span>
                <h4>Mathematics</h4>
                <p>Provides formulas and methods for analyzing data.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🔍</span>
                <h4>Data Analysis</h4>
                <p>Involves examining data to find meaningful information.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🤖</span>
                <h4>Machine Learning</h4>
                <p>Allows computers to learn patterns from data and make predictions.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🏥</span>
                <h4>Domain Knowledge</h4>
                <p>Deep understanding of a specific industry or field—such as healthcare, finance, or retail—including its rules, processes, and unique language.</p>
              </div>
            </div>
            
            <div class="alert alert-success">
              <div class="alert-icon">🎯</div>
              <div class="alert-content">
                <strong>Ultimate Goal of Data Science</strong>
                <p>The ultimate goal of data science is <strong>improving decision making</strong>—using evidence from data to make informed choices across healthcare, finance, retail, and operations.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Extracting Actionable Insights & Patterns',
        content: `
          <div class="section-body">
            <p class="lead-text">Discovering a pattern in data is only valuable when it leads to concrete decisions and actions.</p>
            
            <div class="flow-banner">
              <span>DATA</span> <span class="flow-arrow">→</span>
              <span>ANALYSIS</span> <span class="flow-arrow">→</span>
              <span>INSIGHT</span> <span class="flow-arrow">→</span>
              <span>DECISION</span>
            </div>
            
            <div class="alert alert-info">
              <div class="alert-icon">💡</div>
              <div class="alert-content">
                <strong>Actionable Insight</strong>
                <p>A finding from data that gives us enough useful information to decide <em>what action should be taken</em>.</p>
              </div>
            </div>

            <h3>Common Pattern & Grouping Techniques</h3>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-primary);">1</div>
                <div class="step-content">
                  <h4>Customer Segmentation</h4>
                  <p>Dividing customers into groups based on similar characteristics, behaviors, or preferences.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">2</div>
                <div class="step-content">
                  <h4>Clustering</h4>
                  <p>In Data Science and Machine Learning, this type of grouping (grouping entities with similar characteristics or behaviors) is commonly called <strong>clustering</strong>.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-secondary);">3</div>
                <div class="step-content">
                  <h4>Association-Rule Mining</h4>
                  <p>Data science technique used to discover relationships between items that frequently occur together (e.g., market basket analysis).</p>
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
        heading: 'Core Data Elements',
        content: `
          <div class="section-body">
            <p class="lead-text">To organize and analyze data systematically, we break datasets down into foundational building blocks.</p>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">📋</span>
                <h4>Data</h4>
                <p>A collection of facts, observations, or information about something in the real world.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">👤</span>
                <h4>Entity</h4>
                <p>The real-world person, object, or event that we are interested in studying.</p>
                <p style="margin-top:10px; font-size: 0.85rem; color: var(--info);"><em>Who or what are we studying? (Rows)</em></p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🏷️</span>
                <h4>Attribute</h4>
                <p>An attribute is a characteristic or property that describes an entity (also called a feature or variable).</p>
                <p style="margin-top:10px; font-size: 0.85rem; color: var(--info);"><em>What do we know about it? (Columns)</em></p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🗂️</span>
                <h4>Data Set</h4>
                <p>A collection of related data organized together (typically as an N × M table of entities and attributes).</p>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Analytics Record & Data Architecture Main Areas',
        content: `
          <div class="section-body">
            <div class="alert alert-warning" style="margin-top: 0;">
              <div class="alert-icon">🗃️</div>
              <div class="alert-content">
                <strong>Analytics Record</strong>
                <p><strong>A well-organized collection of data prepared for analysis.</strong> Preparing the analytics record requires resolving missing values, duplicates, and formatting inconsistencies across sources.</p>
              </div>
            </div>

            <h3>Data Architecture Main Areas</h3>
            <p>An organization's data architecture is divided into three main areas:</p>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">1</div>
                <div class="step-content">
                  <h4>Data Sources</h4>
                  <p><strong>Where all the data in an organization are generated.</strong> Includes transactional systems (CRM, ERP, POS), web logs, sensors, and external feeds.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">2</div>
                <div class="step-content">
                  <h4>Data Storage</h4>
                  <p><strong>Where the data are stored and processed.</strong> Includes relational databases (RDBMS), data warehouses, data lakes, and distributed systems like Hadoop.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-secondary);">3</div>
                <div class="step-content">
                  <h4>Applications</h4>
                  <p><strong>Where the data are shared with consumers of these data.</strong> Includes Business Intelligence (BI) dashboards, reporting tools, and analytical applications.</p>
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
    title: 'Phases 1 & 2: Business & Data',
    sections: [
      {
        heading: 'Lesson 2: Life Cycle of Data Science',
        content: `
          <div class="section-banner banner-teal">
            <div class="banner-overlay">
              <span class="banner-kicker">Lesson 2 • Project Methodology</span>
              <h2>The Data Science Life Cycle</h2>
            </div>
          </div>
          <div class="section-body">
            <p class="lead-text">The <strong>Data Science Life Cycle</strong> is defined by three core principles:</p>
            <ul class="styled-list">
              <li>A structured process that guides a data science project from start to finish.</li>
              <li>A roadmap that helps data scientists organize, develop, and complete a data science project effectively.</li>
              <li>An iterative process of research and discovery that guides data scientists in performing the tasks needed to develop and use predictive models.</li>
            </ul>
            
            <h3>Goals (Data Science Project Life Cycle):</h3>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">🧭</span>
                <h4>Clear Process</h4>
                <p>Providing a clear and organized process for the project.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">💬</span>
                <h4>Better Communication</h4>
                <p>Improving communication between data science teams and customers.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">📄</span>
                <h4>Standardized Artifacts</h4>
                <p>Using standardized templates and project documents (artifacts).</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">✅</span>
                <h4>Consistency</h4>
                <p>Making procedures consistent and reducing misunderstandings and confusion.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Phase 1: Business Requirements',
        content: `
          <div class="section-body">
            <p class="lead-text"><strong>Business Requirements</strong> is the first and most important phase of a data science project. It focuses on clearly understanding the business problem before collecting or analyzing data.</p>
            <div class="alert alert-info">
              <div class="alert-icon">🔍</div>
              <div class="alert-content">
                <strong>Core Principle</strong>
                <p>Understand the problem, define the goal, and ask the right questions before working with the data.</p>
              </div>
            </div>
            
            <div class="feature-grid">
              <div class="feature-box">
                <h4>Key Activities (Business Requirements)</h4>
                <ul class="styled-list">
                  <li>Understand the business problem</li>
                  <li>Identify the central objectives of the project</li>
                  <li>Identify the variables that need to be predicted</li>
                  <li>Collaborate with stakeholders and ask "Why?"</li>
                  <li>Formulate the questions that data science needs to answer</li>
                </ul>
              </div>
              <div class="feature-box">
                <h4>Important Activities (Business Requirements)</h4>
                <ul class="styled-list">
                  <li><strong>Identify key variables:</strong> Determine the target variables to be predicted and key inputs.</li>
                  <li><strong>Identify data sources:</strong> Pinpoint where the required data originates.</li>
                </ul>
              </div>
            </div>
            
            <h3>Deliverables (Business Requirements):</h3>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">1</div>
                <div class="step-content">
                  <h4>Charter Document</h4>
                  <p>Which is a living document that gets updated throughout the project, as new data or requirements arise.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">2</div>
                <div class="step-content">
                  <h4>Data Sources</h4>
                  <p>A document which specifies the original and destination locations of the raw data.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--warning);">3</div>
                <div class="step-content">
                  <h4>Data Dictionaries</h4>
                  <p>Provide descriptions of the data supplied by the client including information about the schema and the entity-relation diagrams.</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Phase 2: Data Acquisition and Understanding',
        content: `
          <div class="section-body">
            <p class="lead-text">Once we have already defined the business and its objectives, we need to understand the data and all the different needs.</p>
            
            <h3>Data Ingestion & Key Concepts</h3>
            <p><strong>Data Ingestion</strong> implies setting up the process of moving data from its source locations to the target locations where you run analytics operations.</p>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">📥</span>
                <h4>Source Locations</h4>
                <p>These are the origins of your data, such as databases, APIs, sensors, or files.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">📤</span>
                <h4>Target Locations</h4>
                <p>These are destinations like data warehouses, data lakes, or analytics platforms where you perform operations and reporting.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">⚙️</span>
                <h4>Data Pipeline</h4>
                <p>The automated system that extracts, transforms, and loads (ETL) data from source to target.</p>
              </div>
            </div>

            <h3>ETL 3 Steps Process:</h3>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number">E</div>
                <div class="step-content">
                  <h4>Extracting</h4>
                  <p>Extracting data from single or multiple data sources. Pulling raw data from multiple sources.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">T</div>
                <div class="step-content">
                  <h4>Transforming</h4>
                  <p>Transforming data as per business logic. Is in itself a two steps process—<strong>data cleansing</strong> and <strong>data manipulation</strong>. Cleaning, formatting, and structuring data to make it usable.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">L</div>
                <div class="step-content">
                  <h4>Loading</h4>
                  <p>Loading the previously transformed data into the target data source or data warehouse. Transferring the processed data into the target environment for analysis.</p>
                </div>
              </div>
            </div>

            <h3>Deliverables (Data Acquisition and Understanding):</h3>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">1</div>
                <div class="step-content">
                  <h4>Data Quality Report</h4>
                  <p>This includes data summaries, the relationship between attribute and target, variable ranking, etc.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">2</div>
                <div class="step-content">
                  <h4>Solution Architecture</h4>
                  <p>Can be in the form of a diagram/description of your data pipeline.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--warning);">3</div>
                <div class="step-content">
                  <h4>A Checkpoint Decision</h4>
                  <p>This is used to determine if the value expected is sufficient to continue its pursuit.</p>
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
    id: 'chapter-2-lifecycle-p3-p4',
    title: 'Phases 3 & 4: Modeling & Deployment',
    sections: [
      {
        heading: 'Phase 3: Data Modeling',
        content: `
          <div class="section-banner banner-indigo">
            <div class="banner-overlay">
              <span class="banner-kicker">Lesson 2 • Modeling, Features & Release</span>
              <h2>Analytical Thinking Meets Mathematical Precision</h2>
            </div>
          </div>
          <div class="section-body">
            <p class="lead-text">In <strong>Data Modeling</strong>, you transform your understanding of the data into a structured design that defines how information will be organized, processed, and analyzed. This is where analytical thinking meets mathematical precision.</p>
            
            <h3>Key Focus Areas (Data Modeling):</h3>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">🎯</span>
                <h4>Model Design</h4>
                <p>You define the mathematical or statistical approach that best fits your goals (e.g., regression, classification, clustering).</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🔗</span>
                <h4>Integration of Prior Knowledge</h4>
                <p>Everything learned from earlier stages—data sources, dictionaries, and requirements—guides how you structure and relate data entities.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🔄</span>
                <h4>Iteration and Refinement</h4>
                <p>As new insights emerge, you adjust the model to improve accuracy and relevance.</p>
              </div>
            </div>

            <h3>Deliverables (Data Modeling):</h3>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">1</div>
                <div class="step-content">
                  <h4>Data Model Diagram</h4>
                  <p>Visual representation of entities, relationships, and data flow.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">2</div>
                <div class="step-content">
                  <h4>Model Specification Document</h4>
                  <p>Defines algorithms, parameters, and expected outputs.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--warning);">3</div>
                <div class="step-content">
                  <h4>Validation Report</h4>
                  <p>Shows how the model performs against test data and metrics.</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Feature Engineering & Outlier Handling',
        content: `
          <div class="section-body">
            <p class="lead-text"><strong>Feature Engineering</strong> is one of the most critical tasks in the data preparation stage of a machine learning project. It's the art and science of transforming raw data into meaningful inputs called features that help models learn patterns effectively. It involves creating, modifying, and selecting variables (features) that best represent the underlying problem.</p>
            
            <h3>Key Activities (Feature Engineering):</h3>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">🔗</span>
                <h4>Inclusion and Aggregation</h4>
                <p>Combining raw variables or summarizing data to form new, informative features.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🔄</span>
                <h4>Transformation</h4>
                <p>Applying mathematical or statistical operations (like normalization, scaling, or encoding) to make data suitable for algorithms.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">✂️</span>
                <h4>Feature Selection</h4>
                <p>Identifying which variables are most useful and discarding those that add noise or redundancy.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🏥</span>
                <h4>Domain Knowledge Application</h4>
                <p>Leveraging expertise in the subject area to design features that capture real-world relationships.</p>
              </div>
            </div>

            <h3>Data Transformation and Outlier Handling:</h3>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">📉</span>
                <h4>Log Transform</h4>
                <p>Reduces skewness and compresses large values. Useful for income or population data.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">√</span>
                <h4>Square-root Transformation</h4>
                <p>Stabilizes variance and reduces impact of outliers. Applied to count data (e.g., number of clicks).</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🏷️</span>
                <h4>Categorical Encoding</h4>
                <p>Converts non-numeric data into numeric form. One-hot or label encoding for categorical variables.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">⚡</span>
                <h4>Power Functions</h4>
                <p>Adjusts data distribution using exponents. Helps normalize data for linear models.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">📏</span>
                <h4>Scaling</h4>
                <p>Standardizes feature ranges for uniformity. Min-max scaling or standardization (z-score).</p>
              </div>
            </div>

            <h3>Dealing With Data Issues:</h3>
            <ul class="styled-list">
              <li><strong>Skewed Data:</strong> Adjust distributions using log or power transforms to achieve symmetry.</li>
              <li><strong>Bias Mitigation:</strong> Ensures data doesn't favor one group or outcome unfairly.</li>
              <li><strong>Binning:</strong> Groups continuous values into discrete intervals for easier interpretation.</li>
              <li><strong>Outlier Detection:</strong> Identifies data points that deviate from normal patterns.</li>
            </ul>

            <div class="alert alert-warning">
              <div class="alert-icon">⚠️</div>
              <div class="alert-content">
                <strong>Outliers</strong>
                <p>May signal technical glitches or critical incidents and must be treated carefully to avoid distorting model results.</p>
              </div>
            </div>

            <h3>Common Outlier Treatment Methods:</h3>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-primary);">1</div>
                <div class="step-content">
                  <h4>Trimming</h4>
                  <p>Removes extreme values beyond a defined threshold (e.g., top and bottom 1%). Used when outliers are clearly errors or irrelevant to the analysis.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">2</div>
                <div class="step-content">
                  <h4>Winsorizing</h4>
                  <p>Replaces extreme values with the nearest acceptable boundary (e.g., cap at 95th percentile). Used when you want to keep all data points but reduce the influence of extremes.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">3</div>
                <div class="step-content">
                  <h4>Imputation</h4>
                  <p>Substitutes outlier values with estimated ones (mean, median, or model-based). Used when missing or extreme values need to be retained for continuity.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--warning);">4</div>
                <div class="step-content">
                  <h4>Transformation</h4>
                  <p>Applies mathematical functions (log, square-root, etc.) to reduce the impact of outliers. Used when outliers are legitimate but need normalization.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-secondary);">5</div>
                <div class="step-content">
                  <h4>Segmentation</h4>
                  <p>Separates outliers into a different group for specialized analysis. Used when outliers represent meaningful anomalies (e.g., fraud detection).</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Feature Selection Methods',
        content: `
          <div class="section-body">
            <p class="lead-text"><strong>Feature Selection</strong> identifies the most useful variables for a model using three primary methods:</p>
            
            <div class="feature-grid">
              <div class="feature-box" style="border-top: 4px solid var(--info);">
                <h4>1. Filter-Based Method</h4>
                <p>Features are selected based on statistical metrics without involving a predictive model. Quick, simple, and works well for high-dimensional datasets.</p>
                <h4 style="margin-top: 14px; font-size: 0.95rem; color: var(--info);">Filter-Based Method Examples:</h4>
                <ul class="styled-list">
                  <li><strong>Correlation:</strong> Removes features highly correlated with each other.</li>
                  <li><strong>Chi-square Test:</strong> Measures dependence between categorical variables.</li>
                  <li><strong>ANOVA (Analysis of Variance):</strong> Tests whether different groups have significantly different means.</li>
                </ul>
              </div>

              <div class="feature-box" style="border-top: 4px solid var(--warning);">
                <h4>2. Wrapper-Based Method</h4>
                <p>More accurate but computationally expensive. Treats feature selection as a search problem, evaluating subsets of features by training models and checking performance.</p>
                <h4 style="margin-top: 14px; font-size: 0.95rem; color: var(--warning);">Wrapper-Based Method Examples:</h4>
                <ul class="styled-list">
                  <li><strong>Recursive Feature Elimination (RFE):</strong> Iteratively removes the least important features.</li>
                  <li><strong>Forward Selection:</strong> Starts with no features, adds them one by one based on performance.</li>
                  <li><strong>Backward Selection:</strong> Starts with all features, removes them step by step.</li>
                </ul>
              </div>

              <div class="feature-box" style="border-top: 4px solid var(--success);">
                <h4>3. Embedded Method</h4>
                <p>Efficient and integrated into model training. Uses algorithms that have built-in feature selection during training.</p>
                <h4 style="margin-top: 14px; font-size: 0.95rem; color: var(--success);">Embedded Method Examples:</h4>
                <ul class="styled-list">
                  <li><strong>LASSO (L1 Regularization):</strong> Shrinks coefficients, eliminating less important features.</li>
                  <li><strong>Ridge (L2 Regularization):</strong> Reduces coefficient size but keeps all features, controlling overfitting.</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Phase 4: Deployment',
        content: `
          <div class="section-body">
            <p class="lead-text"><strong>Deployment</strong> is the final step in the data science or machine learning project lifecycle. It's where your model moves from the development environment into a production or production-like environment so that real users can interact with it and validate its performance.</p>
            
            <h3>Key Activities (Deployment):</h3>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">⚙️</span>
                <h4>Model Operationalization</h4>
                <ul class="styled-list">
                  <li>Convert the trained model into a deployable format (e.g., containerized service or API).</li>
                  <li>Ensure scalability, security, and reliability.</li>
                </ul>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🧪</span>
                <h4>User Acceptance Testing (UAT)</h4>
                <ul class="styled-list">
                  <li>End-users validate the model's performance.</li>
                  <li>Any issues or inaccuracies are fixed before full release.</li>
                </ul>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🔌</span>
                <h4>API Exposure</h4>
                <p>The model is exposed through an open API interface, allowing integration with:</p>
                <ul class="styled-list" style="margin-top: 8px;">
                  <li>Websites</li>
                  <li>Dashboards</li>
                  <li>Spreadsheets</li>
                  <li>Backend applications</li>
                </ul>
              </div>
            </div>
            
            <h3>Deliverables (Deployment):</h3>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">1</div>
                <div class="step-content">
                  <h4>Status Dashboard</h4>
                  <p>Displays system health, uptime, and key performance metrics.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">2</div>
                <div class="step-content">
                  <h4>Final Modeling Report</h4>
                  <p>Summarizes model performance, deployment details, and validation results.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-secondary);">3</div>
                <div class="step-content">
                  <h4>Solution Architecture Document</h4>
                  <p>Describes the technical setup, data flow, and integration points.</p>
                </div>
              </div>
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
        heading: 'Compiler vs. Interpreter & Intro to R and RStudio',
        content: `
          <div class="section-banner banner-violet">
            <div class="banner-overlay">
              <span class="banner-kicker">Lesson 3 • R Programming Fundamentals</span>
              <h2>Programming & Statistical Computing in R</h2>
            </div>
          </div>
          <div class="section-body">
            <p class="lead-text">Before diving into R syntax, it helps to distinguish how programming languages translate code into machine execution, and how <strong>R</strong> and <strong>RStudio</strong> work together.</p>

            <h3>Compiler vs. Interpreter</h3>
            <div class="feature-grid">
              <div class="feature-box" style="border-top: 4px solid var(--info);">
                <span class="feature-icon">📘</span>
                <h4>Compiler</h4>
                <p><strong>Translate the whole book → then read it.</strong> Translates the entire program into machine code before execution.</p>
              </div>
              <div class="feature-box" style="border-top: 4px solid var(--accent-secondary);">
                <span class="feature-icon">🗣️</span>
                <h4>Interpreter</h4>
                <p><strong>Translate one sentence → understand it → execute it → move to the next.</strong> R is an interpreted language that executes instructions line by line.</p>
              </div>
            </div>

            <h3>R vs. RStudio</h3>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">📊</span>
                <h4>R (The Language)</h4>
                <ul class="styled-list">
                  <li>A programming language used for statistical computing and graphics.</li>
                  <li>It can be used independently without RStudio.</li>
                </ul>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🖥️</span>
                <h4>RStudio (The IDE)</h4>
                <ul class="styled-list">
                  <li>An integrated development environment (IDE) designed to enhance the R programming experience.</li>
                  <li>It provides a user-friendly interface and tools for writing and executing R code.</li>
                </ul>
              </div>
            </div>
            
            <h3>Interface Components of RStudio</h3>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">💻</span>
                <h4>R Console</h4>
                <p>This area shows the output of code you run. Also, you can directly write codes in console.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">📝</span>
                <h4>R Script</h4>
                <p>As the name suggests, here you get space to write codes (and save/edit them for reuse).</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🌍</span>
                <h4>R Environment</h4>
                <p>This space displays the set of external elements added. This includes data set, variables, vectors, functions, etc.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">📈</span>
                <h4>Graphical Output</h4>
                <p>This space displays the graphs created during exploratory data analysis.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Core Capabilities of R: Statistical, Computational & Visual',
        content: `
          <div class="section-body">
            <p class="lead-text">R is widely used across data science for three major categories of tasks: <strong>Statistical Tasks</strong>, <strong>Computational Tasks</strong>, and <strong>Visual Information</strong>.</p>

            <div class="feature-grid">
              <div class="feature-box" style="border-top: 4px solid var(--accent-primary);">
                <span class="feature-icon">📐</span>
                <h4>Statistical Tasks</h4>
                <ul class="styled-list">
                  <li>Mean, median, and mode</li>
                  <li>Standard deviation and variance</li>
                  <li>Correlation</li>
                  <li>Regression</li>
                  <li>Hypothesis testing</li>
                  <li>Probability distributions</li>
                  <li>ANOVA</li>
                  <li>Classification</li>
                  <li>Clustering</li>
                  <li>Data visualization</li>
                </ul>
              </div>

              <div class="feature-box" style="border-top: 4px solid var(--success);">
                <span class="feature-icon">⚙️</span>
                <h4>Computational Tasks</h4>
                <ul class="styled-list">
                  <li>Data manipulation</li>
                  <li>File processing</li>
                  <li>Automation</li>
                  <li>Programming</li>
                  <li>Web-related tasks</li>
                  <li>Machine learning</li>
                  <li>Database connections</li>
                  <li>Statistical modeling</li>
                  <li>Data visualization</li>
                </ul>
              </div>

              <div class="feature-box" style="border-top: 4px solid var(--warning);">
                <span class="feature-icon">🎨</span>
                <h4>Visual Information</h4>
                <ul class="styled-list">
                  <li>Bar charts</li>
                  <li>Line graphs</li>
                  <li>Pie charts</li>
                  <li>Scatter plots</li>
                  <li>Box plots</li>
                  <li>Maps (Mapsa)</li>
                  <li>Heatmaps</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Objects, Functions & Data Structures in R',
        content: `
          <div class="section-body">
            <p class="lead-text">Everything in R is stored as an object with a specific class and structure.</p>
            
            <h3>5 Basic Classes of Objects</h3>
            <div class="tags-container">
              <span class="tag"><strong>Character</strong> (e.g., <code>"a"</code>, <code>"swc"</code>)</span>
              <span class="tag"><strong>Numeric</strong> (e.g., <code>2</code>, <code>15.5</code>)</span>
              <span class="tag"><strong>Integer</strong> (e.g., <code>2L</code>)</span>
              <span class="tag"><strong>Complex</strong> (e.g., <code>1 + 4i</code>)</span>
              <span class="tag"><strong>Logical</strong> (<code>TRUE</code> / <code>FALSE</code>)</span>
            </div>

            <h3>Object Inspection Functions</h3>
            <div class="feature-grid">
              <div class="feature-box">
                <h4><code>class()</code></h4>
                <p>What kind of object is it (high-level)?</p>
              </div>
              <div class="feature-box">
                <h4><code>typeof()</code></h4>
                <p>What is the object's data type (low-level)?</p>
              </div>
              <div class="feature-box">
                <h4><code>length()</code></h4>
                <p>How long is it? What about two-dimensional objects?</p>
              </div>
              <div class="feature-box">
                <h4><code>attributes()</code></h4>
                <p>Does it have any metadata?</p>
              </div>
            </div>

            <h3>Core Data Types & Structures in R</h3>
            <p>The four main data structures in R are <strong>Vector</strong>, <strong>Matrices</strong>, <strong>Data Frames</strong>, and <strong>List</strong>:</p>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">V</div>
                <div class="step-content">
                  <h4>Vector & Atomic Vector</h4>
                  <p><strong>Vector:</strong> A vector is simply a collection of values stored together (created with <code>c()</code>).<br>
                  <strong>Atomic Vector:</strong> We mean that the vector only holds data of a <em>single data type</em>.<br>
                  <strong>Coercion:</strong> This effect causes the objects of different types to 'convert' into one class when mixed inside a single atomic vector.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--warning);">M</div>
                <div class="step-content">
                  <h4>Matrix (Matrices)</h4>
                  <p>Represented by a set of rows and columns. It is a <strong>2-dimensional data structure</strong>. It consists of elements of the <strong>same class</strong>.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-primary);">DF</div>
                <div class="step-content">
                  <h4>Data Frames</h4>
                  <p>A 2-dimensional tabular data structure (rows and columns) where different columns can hold different data types (e.g., numeric, character, logical)—ideal for real-world datasets.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">L</div>
                <div class="step-content">
                  <h4>List</h4>
                  <p>A special type of vector which contains elements of <strong>different data types</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    chapter: 'Chapter 3: R Programming',
    id: 'chapter-3-dplyr',
    title: 'Data Manipulation & dplyr',
    sections: [
      {
        heading: 'Ways to Change Data & The dplyr Package',
        content: `
          <div class="section-banner banner-blue">
            <div class="banner-overlay">
              <span class="banner-kicker">Lesson 3 • Data Wrangling in R</span>
              <h2>Split-Apply-Combine & dplyr</h2>
            </div>
          </div>
          <div class="section-body">
            <p class="lead-text">In R, transforming and preparing datasets follows three foundational operations—<strong>Split, Apply, and Combine</strong>—and is streamlined by the <strong><code>dplyr</code></strong> package.</p>

            <h3>Ways to Change Data</h3>
            <div class="feature-grid">
              <div class="feature-box" style="border-top: 4px solid var(--info);">
                <span class="feature-icon">✂️</span>
                <h4>Split</h4>
                <p><strong>Splitting and selecting.</strong> Breaking data into subsets or choosing specific parts.</p>
              </div>
              <div class="feature-box" style="border-top: 4px solid var(--warning);">
                <span class="feature-icon">🔄</span>
                <h4>Apply</h4>
                <p><strong>Transforming and re-calculating.</strong> Computing new values or summary metrics on subsets.</p>
              </div>
              <div class="feature-box" style="border-top: 4px solid var(--success);">
                <span class="feature-icon">🔗</span>
                <h4>Combine</h4>
                <p><strong>Aggregating and merging.</strong> Bringing processed results back together into a unified table.</p>
              </div>
            </div>

            <div class="alert alert-info">
              <div class="alert-icon">📦</div>
              <div class="alert-content">
                <strong>What is <code>dplyr</code>?</strong>
                <p><strong><code>dplyr</code></strong> is an R package designed mainly for <strong>data manipulation</strong>. It provides intuitive verb functions for filtering, selecting, mutating, grouping, and summarizing tabular data.</p>
              </div>
            </div>

            <h3>Core <code>dplyr</code> Verbs & The Pipe Operator</h3>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">1</div>
                <div class="step-content">
                  <h4><code>select()</code></h4>
                  <p><strong>Which columns do I want?</strong> Chooses specific variables/columns by name or condition.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">2</div>
                <div class="step-content">
                  <h4><code>filter()</code></h4>
                  <p><strong>Which rows/records do I want?</strong> Subsets rows that satisfy logical conditions.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--warning);">3</div>
                <div class="step-content">
                  <h4><code>mutate()</code></h4>
                  <p><strong>Create or modify a variable/column.</strong> Adds new calculated columns or updates existing ones.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-primary);">4</div>
                <div class="step-content">
                  <h4><code>summarise()</code></h4>
                  <p><strong>Produce a summary of the data.</strong> Collapses rows into summary statistics (such as mean, count, or min/max).</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-secondary);">5</div>
                <div class="step-content">
                  <h4><code>group_by()</code></h4>
                  <p><strong>Divide the data into groups based on a variable.</strong> Pairs with <code>summarise()</code> or <code>mutate()</code> to perform operations per group.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">%>%</div>
                <div class="step-content">
                  <h4>Pipe Operator (<code>%>%</code>)</h4>
                  <p><strong>Take this result and pass it to the next operation.</strong> Chains multiple <code>dplyr</code> steps together into a readable left-to-right pipeline.</p>
                </div>
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
    title: 'Descriptive Stats, Regression & ANOVA',
    sections: [
      {
        heading: 'Descriptive Statistics Tools',
        content: `
          <div class="section-banner banner-teal">
            <div class="banner-overlay">
              <span class="banner-kicker">Lesson 3 • Statistical Analysis in R</span>
              <h2>Descriptive Statistics, Linear Regression & ANOVA</h2>
            </div>
          </div>
          <div class="section-body">
            <p class="lead-text"><strong>Descriptive Statistics Tools</strong> summarize and describe the main features of a dataset through two primary approaches: <strong>Graphical</strong> and <strong>Analytical</strong>.</p>

            <div class="feature-grid">
              <div class="feature-box" style="border-top: 4px solid var(--info);">
                <span class="feature-icon">📊</span>
                <h4>1. Graphical Tools</h4>
                <p>Visual representations used to inspect distributions and relationships:</p>
                <ul class="styled-list" style="margin-top: 10px;">
                  <li><strong>Graphics</strong></li>
                  <li><strong>Bar Diagram</strong></li>
                  <li><strong>Histogram</strong></li>
                  <li><strong>Scattered Diagrams</strong> (Scatter Diagrams)</li>
                </ul>
              </div>

              <div class="feature-box" style="border-top: 4px solid var(--accent-secondary);">
                <span class="feature-icon">🧮</span>
                <h4>2. Analytical Tools</h4>
                <p>Mathematical measures divided into two sub-categories:</p>
                <h4 style="margin-top: 12px; font-size: 0.95rem; color: var(--accent-primary);">Measures of Central Tendency:</h4>
                <ul class="styled-list" style="margin-top: 6px;">
                  <li><strong>Mean</strong> (Average)</li>
                  <li><strong>Median</strong> (Middle value)</li>
                  <li><strong>Mode</strong> (Most frequent value)</li>
                </ul>
                <h4 style="margin-top: 12px; font-size: 0.95rem; color: var(--warning);">Measures of Variations:</h4>
                <ul class="styled-list" style="margin-top: 6px;">
                  <li><strong>Variants (Variance)</strong></li>
                  <li><strong>Standard Deviation</strong></li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      {
        heading: 'Simple Linear Regression & Equation Variables',
        content: `
          <div class="section-body">
            <p class="lead-text"><strong>Simple Linear Regression</strong> is a statistical method used to examine the relationship between one <strong>dependent (response) variable</strong> and one <strong>explanatory (predictor) variable</strong>.</p>
            
            <div class="alert alert-info">
              <div class="alert-icon">📐</div>
              <div class="alert-content">
                <strong>The Tilde Operator (<code>~</code>) & <code>lm()</code> Command</strong>
                <p>In R, the tilde symbol <strong><code>~</code></strong> means <strong>"is explained by"</strong> or <strong>"as a function of"</strong>.</p>
                <p style="margin-top: 8px;"><code>model &lt;- lm(Y ~ X, data = dataset)</code></p>
              </div>
            </div>

            <h3>Basic Regression Equation Variables</h3>
            <p>In the simple linear regression equation <strong><code>Y = b₀ + b₁X</code></strong>, each symbol has a specific role:</p>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-primary);">Y</div>
                <div class="step-content">
                  <h4><code>Y</code> — Dependent / Response Variable</h4>
                  <p>The outcome variable we are trying to predict or explain.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">X</div>
                <div class="step-content">
                  <h4><code>X</code> — Explanatory / Predictor Variable</h4>
                  <p>The input feature used to predict or explain changes in <code>Y</code>.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">b₀</div>
                <div class="step-content">
                  <h4><code>b₀</code> — Intercept</h4>
                  <p>The predicted value of <code>Y</code> when the predictor <code>X</code> is equal to zero.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--warning);">b₁</div>
                <div class="step-content">
                  <h4><code>b₁</code> — Slope / Coefficient</h4>
                  <p>How much the response variable <code>Y</code> changes for a one-unit increase in <code>X</code>.</p>
                </div>
              </div>
            </div>

            <h3>Numeric vs. Categorical Predictors</h3>
            <ul class="styled-list">
              <li><strong>Numeric Predictor (e.g., Age):</strong> Produces an estimated intercept (<code>b₀</code>) and slope (<code>b₁</code>).</li>
              <li><strong>Categorical Predictor (e.g., Smoker Yes/No):</strong> R uses <em>factor/dummy coding</em> to compare categories against a reference category.</li>
            </ul>
          </div>
        `
      },
      {
        heading: 'ANOVA Table & Model Summaries',
        content: `
          <div class="section-body">
            <p class="lead-text">Once a regression model is fitted, we evaluate statistical significance using <code>summary(model)</code> and <code>anova(model)</code>.</p>
            
            <div class="alert alert-warning">
              <div class="alert-icon">📈</div>
              <div class="alert-content">
                <strong>ANOVA Table Definition</strong>
                <p>An <strong>ANOVA Table</strong> (Analysis of Variance) is a table used in statistics to determine whether there is a <strong>statistically significant difference among group means</strong>.</p>
                <p style="margin-top: 8px;">It partitions total variation into variation <em>between groups</em> and variation <em>within groups</em> using the F-test and p-value (Command: <code>anova(model)</code>).</p>
              </div>
            </div>

            <h3>Key Outputs of <code>summary(model)</code></h3>
            <div class="feature-grid">
              <div class="feature-box">
                <h4>Coefficients & p-values</h4>
                <p>Displays estimates for the intercept (<code>b₀</code>) and slope (<code>b₁</code>), standard errors, t-statistics, and p-values. Asterisks (<code>*</code>) mark statistically significant predictors.</p>
              </div>
              <div class="feature-box">
                <h4>Residual Standard Error</h4>
                <p>Measures the variation of observations around the regression line (Root-MSE). Lower values indicate a tighter fit.</p>
              </div>
              <div class="feature-box">
                <h4>Extracting Model Elements</h4>
                <p>Inspect stored model metadata with <code>attributes(model)</code> and extract components using <code>model$coef</code> or <code>coef(model)</code>.</p>
              </div>
            </div>

            <h3>Standard R Modeling Workflow</h3>
            <div class="tags-container" style="background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-md);">
              <span class="tag">1. <code>read_excel()</code> (Import)</span>
              <span class="tag">2. <code>View()</code> (Explore)</span>
              <span class="tag">3. <code>lm(Y ~ X)</code> (Model)</span>
              <span class="tag">4. <code>summary()</code> (Interpret)</span>
              <span class="tag">5. <code>anova()</code> (Test Group Means)</span>
            </div>
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
        heading: 'Master Glossary of All Exam Terms',
        content: `
          <div class="section-body">
            <p class="lead-text">Complete reference table of all definitions, deliverables, R functions, and statistical concepts across Lessons 1, 2, and 3. Use the search box or chapter pills below to filter instantaneously.</p>
            
            <div class="glossary-controls">
              <input type="search" id="glossary-search" class="glossary-search-input" placeholder="Search terms, R functions, or definitions..." aria-label="Search glossary terms">
              <div class="glossary-filter-pills" role="group" aria-label="Filter glossary by chapter">
                <button type="button" class="glossary-filter-btn active" data-chapter="all">All</button>
                <button type="button" class="glossary-filter-btn" data-chapter="Chapter 1">Chapter 1</button>
                <button type="button" class="glossary-filter-btn" data-chapter="Chapter 2">Chapter 2</button>
                <button type="button" class="glossary-filter-btn" data-chapter="Chapter 3">Chapter 3</button>
              </div>
            </div>

            <div class="table-responsive">
              <table id="glossary-table" class="data-table">
                <thead>
                  <tr>
                    <th style="width: 24%;">Term</th>
                    <th style="width: 16%;">Chapter</th>
                    <th style="width: 60%;">Definition & Exam Context</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Chapter 1 Terms -->
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Big Data</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Refers to extremely large and complex amounts of data that are difficult to collect, store, manage, and analyze using traditional database systems such as RDBMS (Relational Database Management Systems).</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Forms of Big Data</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Structured Data and Unstructured Data.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Structured Data</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">More easily analyzed and organized into the database. Typically, data that can be stored in a table, and every instance in the table has the same structure (i.e., set of attributes).</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Benefits of Structured Data</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Ease of Use, Scalability, and Analytics.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Unstructured Data</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Data that does not follow a fixed or organized format, such as rows and columns in a traditional database (e.g., text documents, video, audio, email, stock ticker data).</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Four V's of Big Data</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition"><strong>Volume</strong> (how much data is there?), <strong>Velocity</strong> (at what speed is new data generated?), <strong>Variety</strong> (how diverse are different types of data?), and <strong>Veracity</strong> (how accurate is the data?).</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Data Mining</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">The process of examining large amounts of raw data to discover useful information, patterns, relationships, or trends.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Data Science</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">The study of data to discover useful information, patterns, and insights that can help us understand a situation and make better decisions.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Statistics</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Helps us analyze numbers and determine patterns or trends.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Mathematics</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Provides formulas and methods for analyzing data.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Data Analysis</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Involves examining data to find meaningful information.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Machine Learning</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Allows computers to learn patterns from data and make predictions.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Domain Knowledge</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Deep understanding of a specific industry or field—such as healthcare, finance, or retail—including its rules, processes, and unique language.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Customer Segmentation</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Dividing customers into groups based on similar characteristics, behaviors, or preferences.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Clustering</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">In Data Science and Machine Learning, grouping entities based on similar characteristics or behaviors is commonly called clustering.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Association-Rule Mining</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Data science technique used to discover relationships between items that frequently occur together.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Actionable Insight</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">A finding from data that gives us enough useful information to decide what action should be taken.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Data</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">A collection of facts, observations, or information about something in the real world.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Entity</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">The real-world person, object, or event that we are interested in studying.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Attribute</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">A characteristic or property that describes an entity.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Data Set</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">A collection of related data organized together.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Analytics Record</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">A well-organized collection of data prepared for analysis.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Data Sources (Architecture)</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Where all the data in an organization are generated.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Data Storage (Architecture)</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Where the data are stored and processed.</td>
                  </tr>
                  <tr data-chapter="Chapter 1">
                    <td data-label="Term"><strong>Applications (Architecture)</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch1">Chapter 1</span></td>
                    <td data-label="Definition">Where the data are shared with consumers of these data.</td>
                  </tr>

                  <!-- Chapter 2 Terms -->
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Data Science Life Cycle</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">A structured process and roadmap that guides a data science project from start to finish; an iterative process of research and discovery for developing predictive models.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Business Requirements</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">The first and most important phase of a data science project. Focuses on clearly understanding the business problem, defining the goal, and asking the right questions before working with data.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Charter Document</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 1 Deliverable: A living document that gets updated throughout the project, as new data or requirements arise.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Data Sources (Deliverable)</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 1 Deliverable: A document which specifies the original and destination locations of the raw data.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Data Dictionaries</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 1 Deliverable: Provide descriptions of the data supplied by the client including information about the schema and the entity-relation diagrams.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Data Acquisition & Understanding</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 2: Once business objectives are defined, understanding the data and all its different needs via ETL and Data Ingestion.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>ETL 3 Steps Process</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition"><strong>Extracting</strong> (pulling raw data from single/multiple sources), <strong>Transforming</strong> (two-step process of data cleansing and data manipulation per business logic), and <strong>Loading</strong> (loading transformed data into the target data source/warehouse).</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Data Ingestion</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Setting up the process of moving data from its source locations to the target locations where you run analytics operations.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Source Locations</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">The origins of your data, such as databases, APIs, sensors, or files.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Target Locations</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Destinations like data warehouses, data lakes, or analytics platforms where you perform operations and reporting.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Data Pipeline</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">The automated system that extracts, transforms, and loads (ETL) data from source to target.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Data Quality Report</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 2 Deliverable: Includes data summaries, the relationship between attribute and target, variable ranking, etc.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Solution Architecture (Phase 2)</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 2 Deliverable: Can be in the form of a diagram/description of your data pipeline.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>A Checkpoint Decision</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 2 Deliverable: Used to determine if the value expected is sufficient to continue its pursuit.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Data Modeling</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 3: Transforming your understanding of the data into a structured design that defines how information will be organized, processed, and analyzed.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Model Design</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Defining the mathematical or statistical approach that best fits your goals (e.g., regression, classification, clustering).</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Integration of Prior Knowledge</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Using everything learned from earlier stages (data sources, dictionaries, requirements) to guide how you structure and relate data entities.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Iteration and Refinement</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Adjusting the model as new insights emerge to improve accuracy and relevance.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Data Model Diagram</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 3 Deliverable: Visual representation of entities, relationships, and data flow.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Model Specification Document</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 3 Deliverable: Defines algorithms, parameters, and expected outputs.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Validation Report</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 3 Deliverable: Shows how the model performs against test data and metrics.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Feature Engineering</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">The art and science of transforming raw data into meaningful inputs called features that help models learn patterns effectively (creating, modifying, and selecting variables).</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Inclusion and Aggregation</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Combining raw variables or summarizing data to form new, informative features.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Feature Selection</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Identifying which variables are most useful and discarding those that add noise or redundancy.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Log Transform</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Reduces skewness and compresses large values. Useful for income or population data.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Square-root Transformation</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Stabilizes variance and reduces impact of outliers. Applied to count data (e.g., number of clicks).</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Categorical Encoding</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Converts non-numeric data into numeric form. One-hot or label encoding for categorical variables.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Power Functions</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Adjusts data distribution using exponents. Helps normalize data for linear models.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Scaling</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Standardizes feature ranges for uniformity. Min-max scaling or standardization (z-score).</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Skewed Data</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Adjust distributions using log or power transforms to achieve symmetry.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Bias Mitigation</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Ensures data doesn't favor one group or outcome unfairly.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Binning</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Groups continuous values into discrete intervals for easier interpretation.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Outlier Detection & Outliers</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Identifies data points that deviate from normal patterns. Outliers may signal technical glitches or critical incidents and must be treated carefully.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Trimming</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Removes extreme values beyond a defined threshold (e.g., top and bottom 1%) when outliers are clearly errors or irrelevant.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Winsorizing</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Replaces extreme values with the nearest acceptable boundary (e.g., cap at 95th percentile) when you want to keep all data points but reduce the influence of extremes.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Imputation</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Substitutes outlier values with estimated ones (mean, median, or model-based) when missing or extreme values need to be retained for continuity.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Transformation (Outlier)</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Applies mathematical functions (log, square-root, etc.) to reduce the impact of outliers when they are legitimate but need normalization.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Segmentation (Outlier)</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Separates outliers into a different group for specialized analysis when outliers represent meaningful anomalies (e.g., fraud detection).</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Filter-Based Method</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Features selected based on statistical metrics without a predictive model. Examples: <strong>Correlation</strong> (removes highly correlated features), <strong>Chi-square Test</strong> (dependence between categorical variables), <strong>ANOVA</strong> (tests if groups have significantly different means).</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Wrapper-Based Method</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">More accurate but computationally expensive; evaluates feature subsets by training models. Examples: <strong>RFE</strong> (iteratively removes least important features), <strong>Forward Selection</strong> (starts with none, adds one by one), <strong>Backward Selection</strong> (starts with all, removes step by step).</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Embedded Method</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Efficient and integrated into model training. Examples: <strong>LASSO (L1 Regularization)</strong> (shrinks coefficients, eliminating less important features) and <strong>Ridge (L2 Regularization)</strong> (reduces coefficient size but keeps all features, controlling overfitting).</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Deployment</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 4: The final step in the data science project lifecycle where the model moves from development into production so real users can interact with it and validate performance.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Model Operationalization</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Converting the trained model into a deployable format (e.g., containerized service or API) and ensuring scalability, security, and reliability.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>User Acceptance Testing (UAT)</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">End-users validate the model's performance; any issues or inaccuracies are fixed before full release.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>API Exposure</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Exposing the model through an open API interface for integration with websites, dashboards, spreadsheets, and backend applications.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Status Dashboard</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 4 Deliverable: Displays system health, uptime, and key performance metrics.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Final Modeling Report</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 4 Deliverable: Summarizes model performance, deployment details, and validation results.</td>
                  </tr>
                  <tr data-chapter="Chapter 2">
                    <td data-label="Term"><strong>Solution Architecture Document</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch2">Chapter 2</span></td>
                    <td data-label="Definition">Phase 4 Deliverable: Describes the technical setup, data flow, and integration points.</td>
                  </tr>

                  <!-- Chapter 3 Terms -->
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Compiler</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Translate the whole book → then read it.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Interpreter</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Translate one sentence → understand it → execute it → move to the next.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>R</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">A programming language used for statistical computing and graphics. It can be used independently without RStudio.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>RStudio</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">An integrated development environment (IDE) designed to enhance the R programming experience. Provides a user-friendly interface and tools for writing and executing R code.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>R Console</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Shows the output of code you run. Also, you can directly write codes in console.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>R Script</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Space where you write, edit, and save R codes.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>R Environment</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Displays the set of external elements added, including data sets, variables, vectors, functions, etc.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Graphical Output</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Displays the graphs created during exploratory data analysis.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Statistical Tasks in R</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Mean, median, and mode; Standard deviation and variance; Correlation; Regression; Hypothesis testing; Probability distributions; ANOVA; Classification; Clustering; Data visualization.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Computational Tasks in R</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Data manipulation, File processing, Automation, Programming, Web-related tasks, Machine learning, Database connections, Statistical modeling, Data visualization.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Visual Information in R</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Bar charts, Line graphs, Pie charts, Scatter plots, Box plots, Maps (Mapsa), Heatmaps.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Basic Classes of Objects</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Character, Numeric, Integer, Complex, Logical.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Vector & Atomic Vector</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition"><strong>Vector:</strong> Simply a collection of values stored together. <strong>Atomic Vector:</strong> A vector that only holds data of a single data type.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Object Inspection Functions</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition"><code>class()</code> (what kind of object is it, high-level?), <code>typeof()</code> (what is the object's data type, low-level?), <code>length()</code> (how long is it?), <code>attributes()</code> (does it have any metadata?).</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Data Types (Structures)</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Vector, Matrices, Data Frames, and List.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Coercion</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">This effect causes the objects of different types to 'convert' into one class.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>List</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">A special type of vector which contains elements of different data types.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Matrix</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Represented by a set of rows and columns. It is a 2-dimensional data structure consisting of elements of the same class.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Ways to Change Data</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition"><strong>Split</strong> (splitting and selecting), <strong>Apply</strong> (transforming and re-calculating), <strong>Combine</strong> (aggregating and merging).</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong><code>dplyr</code></strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">An R package designed mainly for data manipulation.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong><code>select()</code></strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition"><code>dplyr</code> verb: Which columns do I want?</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong><code>filter()</code></strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition"><code>dplyr</code> verb: Which rows/records do I want?</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong><code>mutate()</code></strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition"><code>dplyr</code> verb: Create or modify a variable/column.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong><code>summarise()</code></strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition"><code>dplyr</code> verb: Produce a summary of the data.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong><code>group_by()</code></strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition"><code>dplyr</code> verb: Divide the data into groups based on a variable.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Pipe Operator (<code>%>%</code>)</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Take this result and pass it to the next operation.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Descriptive Statistics Tools</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition"><strong>Graphical</strong> (Graphics, Bar Diagram, Histogram, Scattered Diagrams) and <strong>Analytical</strong> (Measures of Central Tendency: Mean, Median, Mode; Measures of Variations: Variants/Variance, Standard Deviation).</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Simple Linear Regression</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">A statistical method used to examine the relationship between one dependent (response) variable and one explanatory (predictor) variable.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Tilde (<code>~</code>)</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">Means "is explained by" or "as a function of" in R formulas (e.g., <code>lm(Y ~ X)</code>).</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>Regression Variables (<code>Y, X, b₀, b₁</code>)</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition"><strong><code>Y</code></strong> = Dependent/Response Variable; <strong><code>X</code></strong> = Explanatory/Predictor Variable; <strong><code>b₀</code></strong> = Intercept; <strong><code>b₁</code></strong> = Slope/Coefficient.</td>
                  </tr>
                  <tr data-chapter="Chapter 3">
                    <td data-label="Term"><strong>ANOVA Table</strong></td>
                    <td data-label="Chapter"><span class="tag tag-ch3">Chapter 3</span></td>
                    <td data-label="Definition">A table used in statistics to determine whether there is a statistically significant difference among group means.</td>
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

const quizData = [
  // CHAPTER 1: INTRO TO DATA SCIENCE (Questions 1 - 16)
  {
    id: 1,
    chapter: 'Chapter 1',
    question: 'What does Big Data refer to in Data Science?',
    options: [
      'Any dataset stored inside a standard Microsoft Excel worksheet',
      'Extremely large and complex amounts of data that are difficult to collect, store, manage, and analyze using traditional RDBMS',
      'A small relational table where every row has fewer than ten attributes',
      'Data that can only be processed manually without computers'
    ],
    correct: 1,
    explanation: 'Big Data refers to extremely large and complex amounts of data that traditional Relational Database Management Systems (RDBMS) like MySQL or Oracle struggle to collect, store, manage, and analyze efficiently.'
  },
  {
    id: 2,
    chapter: 'Chapter 1',
    question: 'Which of the Four V\'s of Big Data answers the question: "How much data is there?"',
    options: [
      'Velocity',
      'Variety',
      'Volume',
      'Veracity'
    ],
    correct: 2,
    explanation: 'Volume refers to the sheer amount or size of data generated and collected by an organization ("How much data is there?").'
  },
  {
    id: 3,
    chapter: 'Chapter 1',
    question: 'Which of the Four V\'s of Big Data refers to the speed at which new data is generated and flows into an organization?',
    options: [
      'Velocity',
      'Veracity',
      'Volume',
      'Variety'
    ],
    correct: 0,
    explanation: 'Velocity means "at what speed is new data generated?"—such as real-time sensor streams, live video, or rapid social media activity.'
  },
  {
    id: 4,
    chapter: 'Chapter 1',
    question: 'Text documents, video, audio, email, and stock ticker data existing alongside numeric database tables illustrate which V of Big Data?',
    options: [
      'Veracity',
      'Volume',
      'Velocity',
      'Variety'
    ],
    correct: 3,
    explanation: 'Variety means "how diverse are different types of data?" It encompasses both structured numeric tables and unstructured formats like text, video, audio, email, and stock ticker data.'
  },
  {
    id: 5,
    chapter: 'Chapter 1',
    question: 'In the Four V\'s of Big Data, what does Veracity measure?',
    options: [
      'How fast data packets travel across a network',
      'How accurate, trustworthy, and reliable the data is',
      'How many terabytes of storage are required',
      'How many columns exist in a relational table'
    ],
    correct: 1,
    explanation: 'Veracity answers "how accurate is the data?" It focuses on the quality, trustworthiness, and reliability of the data source.'
  },
  {
    id: 6,
    chapter: 'Chapter 1',
    question: 'Which statement best defines Structured Data?',
    options: [
      'Data that does not follow any fixed format, such as raw audio recordings',
      'Data that can be stored in a table where every instance has the same structure (set of attributes)',
      'Data that cannot be searched or filtered using SQL',
      'Multimedia files that make up 80–90% of all organizational data'
    ],
    correct: 1,
    explanation: 'Structured Data is easily analyzed and organized in a database—typically stored in a table where every instance (row) shares the exact same structure (set of attributes).'
  },
  {
    id: 7,
    chapter: 'Chapter 1',
    question: 'What are the three main benefits of Structured Data highlighted in your lecture notes?',
    options: [
      'Volume, Velocity, and Variety',
      'Extracting, Transforming, and Loading',
      'Ease of Use, Scalability, and Analytics',
      'Trimming, Winsorizing, and Imputation'
    ],
    correct: 2,
    explanation: 'The three core benefits of Structured Data are Ease of Use (easy to find, add, update, or delete), Scalability (easily expanded by adding storage), and Analytics (ready for SQL querying and ML models).'
  },
  {
    id: 8,
    chapter: 'Chapter 1',
    question: 'Which of the following is an example of Unstructured Data?',
    options: [
      'A relational SQL table of student IDs and numerical GPAs',
      'Video recordings, audio files, emails, and text documents that do not follow a fixed row-and-column format',
      'An N × M data matrix with uniform numeric attributes',
      'A standardized database schema with primary keys'
    ],
    correct: 1,
    explanation: 'Unstructured Data does not follow a fixed row-and-column format in a traditional database. Examples include text documents, video, audio, email, and social media posts.'
  },
  {
    id: 9,
    chapter: 'Chapter 1',
    question: 'What is the process of examining large amounts of raw data ("digging through the mountain") to discover useful information, patterns, relationships, or trends?',
    options: [
      'Data Ingestion',
      'Data Mining',
      'Categorical Encoding',
      'Model Operationalization'
    ],
    correct: 1,
    explanation: 'Data Mining is the specific process of examining large amounts of raw data to uncover useful patterns, relationships, or trends.'
  },
  {
    id: 10,
    chapter: 'Chapter 1',
    question: 'What is the ultimate goal of Data Science across business functions?',
    options: [
      'Collecting as many terabytes of raw uncleaned data as possible',
      'Replacing all domain experts with automated scripts',
      'Improving decision making through useful information, patterns, and insights from data',
      'Writing code exclusively in compiled languages'
    ],
    correct: 2,
    explanation: 'Data Science is the study of data to discover useful information, patterns, and insights that help us understand a situation and make better decisions.'
  },
  {
    id: 11,
    chapter: 'Chapter 1',
    question: 'Among the fields combined in Data Science, which one provides a deep understanding of a specific industry (such as healthcare, finance, or retail), including its rules, processes, and unique language?',
    options: [
      'Mathematics',
      'Domain Knowledge',
      'Machine Learning',
      'Statistics'
    ],
    correct: 1,
    explanation: 'Domain Knowledge is the deep understanding of a specific industry or field—such as healthcare, finance, or retail—including its rules, workflows, and terminology.'
  },
  {
    id: 12,
    chapter: 'Chapter 1',
    question: 'Dividing customers into groups such as "Budget Shoppers", "Premium Shoppers", and "Occasional Shoppers" based on similar characteristics, behaviors, or preferences is called:',
    options: [
      'Association-Rule Mining',
      'Customer Segmentation',
      'Winsorizing',
      'Forward Selection'
    ],
    correct: 1,
    explanation: 'Customer Segmentation is the practice of dividing customers into groups based on shared characteristics, behaviors, or preferences.'
  },
  {
    id: 13,
    chapter: 'Chapter 1',
    question: 'In Data Science and Machine Learning, what is the common term for grouping entities that behave similarly without predefined labels?',
    options: [
      'Clustering',
      'Simple Linear Regression',
      'Trimming',
      'Dummy Coding'
    ],
    correct: 0,
    explanation: 'In Data Science and Machine Learning, grouping entities based on similar characteristics or behaviors is commonly called clustering.'
  },
  {
    id: 14,
    chapter: 'Chapter 1',
    question: 'A supermarket discovers that customers who buy coffee frequently also buy biscuits in the same transaction. Which data science technique discovers such item relationships?',
    options: [
      'Recursive Feature Elimination (RFE)',
      'Association-Rule Mining',
      'LASSO Regularization',
      'Log Transformation'
    ],
    correct: 1,
    explanation: 'Association-Rule Mining (often used in market basket analysis) discovers relationships between items that frequently occur together.'
  },
  {
    id: 15,
    chapter: 'Chapter 1',
    question: 'What makes a finding from data an "Actionable Insight"?',
    options: [
      'It is stored in an unstructured format',
      'It gives us enough useful information to decide what specific action should be taken',
      'It contains at least one million rows of raw observations',
      'It was generated without any statistical analysis'
    ],
    correct: 1,
    explanation: 'An Actionable Insight is a finding from data that provides enough useful information to decide what concrete action should be taken (DATA → ANALYSIS → INSIGHT → DECISION).'
  },
  {
    id: 16,
    chapter: 'Chapter 1',
    question: 'What do we call the well-organized, cleaned master collection of data prepared specifically for analysis (where rows are Entities and columns are Attributes)?',
    options: [
      'Charter Document',
      'Analytics Record',
      'Status Dashboard',
      'Source Location'
    ],
    correct: 1,
    explanation: 'An Analytics Record is a well-organized collection of data prepared for analysis after resolving missing values, duplicates, and formatting issues.'
  },

  // CHAPTER 2: DATA SCIENCE LIFE CYCLE (Questions 17 - 34)
  {
    id: 17,
    chapter: 'Chapter 2',
    question: 'Which of the following is NOT one of the stated goals of the Data Science Project Life Cycle?',
    options: [
      'Providing a clear and organized process for the project',
      'Improving communication between data science teams and customers',
      'Using standardized templates and project documents (artifacts)',
      'Skipping business understanding to start coding models immediately'
    ],
    correct: 3,
    explanation: 'The Data Science Life Cycle aims to provide a clear process, improve team-customer communication, use standardized artifacts, and make procedures consistent to reduce confusion—never to skip business understanding.'
  },
  {
    id: 18,
    chapter: 'Chapter 2',
    question: 'What is the first and most important phase of a data science project?',
    options: [
      'Data Modeling',
      'Business Requirements',
      'Deployment',
      'Feature Engineering'
    ],
    correct: 1,
    explanation: 'Phase 1: Business Requirements is the first and most important phase. It focuses on clearly understanding the business problem, defining the goal, and asking the right questions before working with data.'
  },
  {
    id: 19,
    chapter: 'Chapter 2',
    question: 'Which two tasks are highlighted as the "Important Activities" during the Business Requirements phase?',
    options: [
      'Identify key variables and Identify data sources',
      'Winsorizing outliers and Scaling features',
      'Containerizing APIs and Running User Acceptance Testing',
      'Writing R scripts and Running ANOVA tables'
    ],
    correct: 0,
    explanation: 'The two Important Activities in Phase 1 (Business Requirements) are identifying key variables (targets to predict) and identifying data sources.'
  },
  {
    id: 20,
    chapter: 'Chapter 2',
    question: 'Which Phase 1 (Business Requirements) deliverable is described as "a living document that gets updated throughout the project, as new data or requirements arise"?',
    options: [
      'Validation Report',
      'Charter Document',
      'Data Quality Report',
      'Data Dictionary'
    ],
    correct: 1,
    explanation: 'The Charter Document is a living document created in Phase 1 that gets updated throughout the lifecycle as new data or requirements emerge.'
  },
  {
    id: 21,
    chapter: 'Chapter 2',
    question: 'Which Phase 1 deliverable provides descriptions of the data supplied by the client, including information about the schema and entity-relation diagrams?',
    options: [
      'Data Dictionaries',
      'Checkpoint Decision',
      'Status Dashboard',
      'Model Specification Document'
    ],
    correct: 0,
    explanation: 'Data Dictionaries provide descriptions of client-supplied data, including schema details and entity-relation diagrams.'
  },
  {
    id: 22,
    chapter: 'Chapter 2',
    question: 'In Phase 2 (Data Acquisition & Understanding), what term refers to setting up the process of moving data from its source locations to target locations for analytics?',
    options: [
      'Data Ingestion',
      'Feature Selection',
      'Dummy Coding',
      'Bias Mitigation'
    ],
    correct: 0,
    explanation: 'Data Ingestion is the process of moving data from its Source Locations (databases, APIs, sensors, files) to Target Locations (data warehouses, data lakes, analytics platforms) via a Data Pipeline.'
  },
  {
    id: 23,
    chapter: 'Chapter 2',
    question: 'In the ETL 3-Step Process, which step is itself a two-step process consisting of data cleansing and data manipulation as per business logic?',
    options: [
      'Extracting',
      'Transforming',
      'Loading',
      'Operationalizing'
    ],
    correct: 1,
    explanation: 'Transforming transforms data according to business logic and is a two-step process: data cleansing and data manipulation (cleaning, formatting, and structuring data to make it usable).'
  },
  {
    id: 24,
    chapter: 'Chapter 2',
    question: 'Which Phase 2 deliverable is used to determine whether the expected value of the project is sufficient to continue pursuing it?',
    options: [
      'Data Quality Report',
      'Solution Architecture',
      'A Checkpoint Decision',
      'Data Model Diagram'
    ],
    correct: 2,
    explanation: 'A Checkpoint Decision is a Phase 2 deliverable used to evaluate whether the expected business value justifies continuing the project.'
  },
  {
    id: 25,
    chapter: 'Chapter 2',
    question: 'What are the three Key Focus Areas of Phase 3 (Data Modeling)?',
    options: [
      'Extracting, Transforming, and Loading',
      'Model Design, Integration of Prior Knowledge, and Iteration and Refinement',
      'Filter-Based, Wrapper-Based, and Embedded Methods',
      'Split, Apply, and Combine'
    ],
    correct: 1,
    explanation: 'The three Key Focus Areas of Data Modeling are Model Design, Integration of Prior Knowledge, and Iteration and Refinement.'
  },
  {
    id: 26,
    chapter: 'Chapter 2',
    question: 'Which Phase 3 (Data Modeling) deliverable defines the algorithms, parameters, and expected outputs, while another shows how the model performs against test data and metrics?',
    options: [
      'Charter Document and Data Dictionary',
      'Model Specification Document and Validation Report',
      'Data Quality Report and Checkpoint Decision',
      'Status Dashboard and API Exposure'
    ],
    correct: 1,
    explanation: 'In Phase 3, the Model Specification Document defines algorithms, parameters, and expected outputs, while the Validation Report shows how the model performs against test data and metrics.'
  },
  {
    id: 27,
    chapter: 'Chapter 2',
    question: 'In Feature Engineering, what is the activity of combining raw variables or summarizing data to form new, informative features?',
    options: [
      'Inclusion and Aggregation',
      'Trimming',
      'Backward Selection',
      'API Exposure'
    ],
    correct: 0,
    explanation: 'Inclusion and Aggregation is the Feature Engineering activity of combining raw variables or summarizing data to create new, informative features.'
  },
  {
    id: 28,
    chapter: 'Chapter 2',
    question: 'Which data transformation is specifically recommended for reducing skewness and compressing large values in income or population data?',
    options: [
      'Categorical Encoding',
      'Log Transform',
      'One-Hot Encoding',
      'Chi-square Test'
    ],
    correct: 1,
    explanation: 'Log Transform reduces skewness and compresses large values, making it especially useful for right-skewed income or population datasets.'
  },
  {
    id: 29,
    chapter: 'Chapter 2',
    question: 'Grouping continuous values into discrete intervals for easier interpretation is known as:',
    options: [
      'Binning',
      'Scaling',
      'Winsorizing',
      'Coercion'
    ],
    correct: 0,
    explanation: 'Binning groups continuous numeric values into discrete intervals (bins/buckets) for easier interpretation.'
  },
  {
    id: 30,
    chapter: 'Chapter 2',
    question: 'How does Winsorizing differ from Trimming when treating outliers?',
    options: [
      'Winsorizing deletes the entire column, whereas Trimming imputes the mean',
      'Winsorizing replaces extreme values with the nearest acceptable boundary (e.g., capping at the 95th percentile), whereas Trimming removes extreme values beyond a threshold',
      'Winsorizing is only used for text data, whereas Trimming is used for audio data',
      'There is no difference; both delete the top and bottom 1% of records'
    ],
    correct: 1,
    explanation: 'Trimming removes extreme values beyond a threshold (e.g., top/bottom 1%), whereas Winsorizing keeps all data points by replacing extreme values with the nearest acceptable boundary (e.g., capping at the 95th percentile).'
  },
  {
    id: 31,
    chapter: 'Chapter 2',
    question: 'When outliers represent meaningful anomalies—such as in fraud detection—which outlier treatment method separates them into a different group for specialized analysis?',
    options: [
      'Imputation',
      'Segmentation',
      'Square-root Transformation',
      'Min-max Scaling'
    ],
    correct: 1,
    explanation: 'Segmentation separates outliers into a distinct group for specialized analysis when those outliers represent meaningful real-world anomalies such as fraud.'
  },
  {
    id: 32,
    chapter: 'Chapter 2',
    question: 'Correlation, Chi-square Test, and ANOVA are examples of which Feature Selection approach?',
    options: [
      'Filter-Based Method',
      'Wrapper-Based Method',
      'Embedded Method',
      'Regularization Method'
    ],
    correct: 0,
    explanation: 'Filter-Based Methods select features using statistical metrics (Correlation, Chi-square Test, ANOVA) without involving a predictive model during selection.'
  },
  {
    id: 33,
    chapter: 'Chapter 2',
    question: 'Compare LASSO (L1 Regularization) and Ridge (L2 Regularization) under the Embedded Feature Selection method:',
    options: [
      'LASSO shrinks coefficients and eliminates less important features, whereas Ridge reduces coefficient size but keeps all features to control overfitting',
      'Ridge eliminates all features, whereas LASSO keeps all features',
      'Both are Filter-Based methods that do not train a model',
      'LASSO is Forward Selection, whereas Ridge is Backward Selection'
    ],
    correct: 0,
    explanation: 'LASSO (L1 Regularization) shrinks coefficients and can eliminate less important features entirely, whereas Ridge (L2 Regularization) reduces coefficient magnitudes to control overfitting while keeping all features.'
  },
  {
    id: 34,
    chapter: 'Chapter 2',
    question: 'In Phase 4 (Deployment), which deliverable displays system health, uptime, and key performance metrics?',
    options: [
      'Final Modeling Report',
      'Status Dashboard',
      'Solution Architecture Document',
      'Charter Document'
    ],
    correct: 1,
    explanation: 'The Status Dashboard displays live system health, uptime, and key performance metrics, while the Final Modeling Report summarizes model performance/validation and the Solution Architecture Document describes technical setup and data flow.'
  },

  // CHAPTER 3: R PROGRAMMING, DPLYR, DESCRIPTIVE STATS & REGRESSION (Questions 35 - 50)
  {
    id: 35,
    chapter: 'Chapter 3',
    question: 'In your lecture notes\' book analogy, which tool translates "one sentence → understand it → execute it → move to the next"?',
    options: [
      'Compiler',
      'Interpreter',
      'Data Pipeline',
      'Relational Database'
    ],
    correct: 1,
    explanation: 'A Compiler translates the whole book first and then reads it, whereas an Interpreter translates one sentence, understands it, executes it, and moves to the next.'
  },
  {
    id: 36,
    chapter: 'Chapter 3',
    question: 'Which statement accurately describes the relationship between R and RStudio?',
    options: [
      'R cannot run unless RStudio is installed first',
      'R is a programming language for statistical computing and graphics that can be used independently, while RStudio is an IDE designed to enhance the R experience',
      'RStudio is a database engine and R is a spreadsheet app',
      'R and RStudio are two different names for the exact same compiler'
    ],
    correct: 1,
    explanation: 'R is the programming language used for statistical computing and graphics (and can be used independently without RStudio), while RStudio is an Integrated Development Environment (IDE) providing a user-friendly interface.'
  },
  {
    id: 37,
    chapter: 'Chapter 3',
    question: 'Which RStudio pane displays the set of external elements added—such as datasets, variables, vectors, and functions?',
    options: [
      'R Console',
      'R Script',
      'R Environment',
      'Graphical Output'
    ],
    correct: 2,
    explanation: 'The R Environment pane displays loaded external elements including datasets, variables, vectors, and functions.'
  },
  {
    id: 38,
    chapter: 'Chapter 3',
    question: 'In Lesson 3, Bar charts, Line graphs, Pie charts, Scatter plots, Box plots, Maps (Mapsa), and Heatmaps fall under which category of R capabilities?',
    options: [
      'Statistical Tasks',
      'Computational Tasks',
      'Visual Information',
      'Object Coercion'
    ],
    correct: 2,
    explanation: 'Bar charts, Line graphs, Pie charts, Scatter plots, Box plots, Maps (Mapsa), and Heatmaps are the seven items listed under Visual Information in R.'
  },
  {
    id: 39,
    chapter: 'Chapter 3',
    question: 'What are the 5 Basic Classes of Objects (data types) in R?',
    options: [
      'Character, Numeric, Integer, Complex, and Logical',
      'Vector, Matrix, Data Frame, List, and Table',
      'Select, Filter, Mutate, Summarise, and Group_by',
      'Mean, Median, Mode, Variance, and Standard Deviation'
    ],
    correct: 0,
    explanation: 'The 5 Basic Classes of Objects in R are Character ("a"), Numeric (15.5), Integer (2L), Complex (1+4i), and Logical (TRUE/FALSE).'
  },
  {
    id: 40,
    chapter: 'Chapter 3',
    question: 'In R, which function answers "What kind of object is it (high-level)?" versus "What is the object\'s data type (low-level)?"',
    options: [
      'length() for high-level; attributes() for low-level',
      'class() for high-level; typeof() for low-level',
      'typeof() for high-level; class() for low-level',
      'summary() for high-level; anova() for low-level'
    ],
    correct: 1,
    explanation: 'class() tells you what kind of object it is at a high level, while typeof() tells you the object\'s low-level internal data type.'
  },
  {
    id: 41,
    chapter: 'Chapter 3',
    question: 'What happens when you mix elements of different data types inside an Atomic Vector in R?',
    options: [
      'R throws a fatal compiler crash and deletes the vector',
      'Coercion occurs, causing objects of different types to convert into a single common class',
      'The atomic vector automatically turns into a 2-dimensional Matrix',
      'R ignores all non-numeric values'
    ],
    correct: 1,
    explanation: 'An Atomic Vector can only hold data of a single data type. When different types are mixed, Coercion converts them into one unified class.'
  },
  {
    id: 42,
    chapter: 'Chapter 3',
    question: 'Which R data structure is a special type of vector that CAN contain elements of different data types, versus a 2-dimensional structure of rows and columns where all elements must be of the SAME class?',
    options: [
      'List (different data types) vs. Matrix (2D of same class)',
      'Matrix (different data types) vs. Atomic Vector (2D of same class)',
      'Character (different data types) vs. Logical (2D of same class)',
      'Console (different data types) vs. Environment (2D of same class)'
    ],
    correct: 0,
    explanation: 'A List is a special vector that can hold elements of different data types, whereas a Matrix is a 2-dimensional structure (rows and columns) consisting of elements of the same class.'
  },
  {
    id: 43,
    chapter: 'Chapter 3',
    question: 'Under "Ways to Change Data" in R, what do Split, Apply, and Combine each mean?',
    options: [
      'Split = splitting and selecting; Apply = transforming and re-calculating; Combine = aggregating and merging',
      'Split = deleting outliers; Apply = deploying APIs; Combine = writing documentation',
      'Split = extracting; Apply = loading; Combine = archiving',
      'Split = plotting; Apply = compiling; Combine = interpreting'
    ],
    correct: 0,
    explanation: 'In R data handling: Split means splitting and selecting, Apply means transforming and re-calculating, and Combine means aggregating and merging.'
  },
  {
    id: 44,
    chapter: 'Chapter 3',
    question: 'In the dplyr package, what is the exact difference between select() and filter()?',
    options: [
      'select() chooses which rows/records you want; filter() chooses which columns you want',
      'select() answers "Which columns do I want?"; filter() answers "Which rows/records do I want?"',
      'select() creates new variables; filter() groups data by category',
      'Both functions only work on unstructured audio files'
    ],
    correct: 1,
    explanation: 'In dplyr, select() chooses columns ("Which columns do I want?"), while filter() subsets rows/records ("Which rows/records do I want?").'
  },
  {
    id: 45,
    chapter: 'Chapter 3',
    question: 'Which dplyr function is used to "Create or modify a variable/column", and which one is used to "Divide the data into groups based on a variable"?',
    options: [
      'summarise() and select()',
      'mutate() and group_by()',
      'filter() and mutate()',
      'class() and typeof()'
    ],
    correct: 1,
    explanation: 'mutate() creates or modifies a variable/column, while group_by() divides the data into groups based on a variable (often paired with summarise()).'
  },
  {
    id: 46,
    chapter: 'Chapter 3',
    question: 'What does the Pipe Operator (%>%) do in R?',
    options: [
      'Checks whether two categorical variables are independent',
      'Takes the result of one operation and passes it directly into the next operation',
      'Computes the residual standard error of a linear model',
      'Converts an R script into a binary executable'
    ],
    correct: 1,
    explanation: 'The Pipe Operator (%>%) means: "Take this result and pass it to the next operation," allowing clean left-to-right data manipulation pipelines.'
  },
  {
    id: 47,
    chapter: 'Chapter 3',
    question: 'Under Descriptive Statistics Tools, how are Graphical and Analytical tools categorized in your notes?',
    options: [
      'Graphical includes Graphics, Bar Diagram, Histogram, and Scattered Diagrams; Analytical includes Measures of Central Tendency (Mean, Median, Mode) and Measures of Variations (Variants/Variance, Standard Deviation)',
      'Graphical includes Mean and Median; Analytical includes Bar Diagram and Histogram',
      'Graphical includes LASSO and Ridge; Analytical includes RFE and Forward Selection',
      'Graphical includes ETL; Analytical includes API Exposure'
    ],
    correct: 0,
    explanation: 'Descriptive Statistics Tools are divided into Graphical (Graphics, Bar Diagram, Histogram, Scattered Diagrams) and Analytical (Measures of Central Tendency: Mean, Median, Mode; Measures of Variations: Variants/Variance, Standard Deviation).'
  },
  {
    id: 48,
    chapter: 'Chapter 3',
    question: 'In the R linear regression command lm(LungCap ~ Age, data = LungCapData), what does the tilde symbol (~) mean?',
    options: [
      '"is multiplied by"',
      '"is explained by" or "as a function of"',
      '"is coerced into"',
      '"is piped to"'
    ],
    correct: 1,
    explanation: 'In R formula syntax, the tilde (~) reads as "is explained by" or "as a function of" (i.e., LungCap is explained by Age).'
  },
  {
    id: 49,
    chapter: 'Chapter 3',
    question: 'In the Basic Regression Equation (Y = b₀ + b₁X), what do Y, X, b₀, and b₁ represent?',
    options: [
      'Y = Dependent/Response Variable, X = Explanatory/Predictor Variable, b₀ = Intercept, b₁ = Slope/Coefficient',
      'Y = Explanatory Variable, X = Response Variable, b₀ = Slope, b₁ = Intercept',
      'Y = Variance, X = Standard Deviation, b₀ = Mean, b₁ = Median',
      'Y = Residual, X = F-statistic, b₀ = p-value, b₁ = R-squared'
    ],
    correct: 0,
    explanation: 'In the regression equation: Y is the Dependent/Response Variable, X is the Explanatory/Predictor Variable, b₀ is the Intercept, and b₁ is the Slope/Coefficient.'
  },
  {
    id: 50,
    chapter: 'Chapter 3',
    question: 'What is an ANOVA Table used for in statistics and R?',
    options: [
      'To convert unstructured video into relational tables',
      'To determine whether there is a statistically significant difference among group means',
      'To remove the top and bottom 1% of extreme values',
      'To write and save R scripts in the RStudio editor'
    ],
    correct: 1,
    explanation: 'An ANOVA (Analysis of Variance) Table is used in statistics to determine whether there is a statistically significant difference among group means using the F-test and p-value.'
  }
];
