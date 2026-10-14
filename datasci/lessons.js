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
        heading: 'Forms of Big Data: Structured vs. Unstructured',
        content: `
          <div class="section-body">
            <p class="lead-text">Big Data comes in two main <strong>forms</strong>: <strong>Structured Data</strong> and <strong>Unstructured Data</strong>. All data can generally be classified into these two major categories based on its formatting and organization.</p>
            
            <div class="feature-grid">
              <div class="feature-box" style="border-top: 4px solid var(--success);">
                <span class="feature-icon">📊</span>
                <h4>Structured Data</h4>
                <p>More easily analyzed and organized into the database. Typically, data that can be stored in a table, and every instance in the table has the same structure (i.e., set of attributes).</p>
                <h4 style="margin-top: 15px; font-size: 0.95rem; color: var(--accent-primary);">Benefits of Structured Data:</h4>
                <ul class="styled-list" style="margin-top: 10px;">
                  <li><strong>Ease of Use:</strong> Easy to find, add, update, or delete. Highly organized and searchable.</li>
                  <li><strong>Scalability:</strong> Systems can easily handle increasing amounts by adding storage.</li>
                  <li><strong>Analytics:</strong> Perfect for SQL filtering and running basic machine learning algorithms.</li>
                </ul>
              </div>
              
              <div class="feature-box" style="border-top: 4px solid var(--warning);">
                <span class="feature-icon">📱</span>
                <h4>Unstructured Data</h4>
                <p>Data that does not follow a fixed or organized format, such as rows and columns in a traditional database. It makes up 80-90% of all data generated today.</p>
                <ul class="styled-list" style="margin-top: 15px;">
                  <li><strong>Examples:</strong> Text documents, video, audio, email, stock ticker data, social media posts, PDFs.</li>
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

            <p><strong>Data Mining</strong> is the process of examining large amounts of raw data to discover useful information, patterns, relationships, or trends. For example, a supermarket using software to discover that "Customers who buy coffee often also buy biscuits", which helps them place products together to increase sales.</p>

            <h3 style="margin-top: 30px;">What is Data Science?</h3>
            <p><strong>Data Science</strong> is the study of data to discover useful information, patterns, and insights that can help us understand a situation and make better decisions. It acts as a large umbrella that combines multiple disciplines.</p>
            
            <h4 style="margin-top: 20px;">Fields Combined in Data Science:</h4>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">📊</span>
                <h4>Statistics</h4>
                <p>Helps us analyze numbers and determine patterns or trends in data.</p>
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
            
            <p>An <strong>insight</strong> is a useful understanding from data (e.g., "Students with low attendance tend to have lower grades"). However, an <strong>actionable insight</strong> is a finding from data that gives us enough useful information to decide <em>what action should be taken</em>.</p>
            
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
                  <h4>Customer Segmentation</h4>
                  <p>Dividing customers into groups based on similar characteristics, behaviors, or preferences. E.g., dividing 10,000 customers into "Budget Shoppers", "Premium Shoppers", and "Occasional Shoppers" based on their spending and frequency.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--success);">2</div>
                <div class="step-content">
                  <h4>Clustering</h4>
                  <p>In Data Science and Machine Learning, grouping entities that behave similarly is commonly called <strong>clustering</strong>. It groups data without predefined labels, discovering natural groupings in the data.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number" style="background: var(--accent-secondary);">3</div>
                <div class="step-content">
                  <h4>Association-Rule Mining</h4>
                  <p>A data science technique used to discover relationships between items that frequently occur together. Also known as Market Basket Analysis. E.g., discovering that Diapers and Baby Wipes are frequently bought in the same transaction.</p>
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
            <p class="lead-text">To work with data, we must first understand its foundational components.</p>
            <div class="feature-grid">
              <div class="feature-box">
                <span class="feature-icon">📋</span>
                <h4>Data</h4>
                <p>A collection of facts, observations, or information about something in the real world.</p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">👤</span>
                <h4>Entity</h4>
                <p>The real-world person, object, or event that we are interested in studying (e.g., a specific Student like Maria, a specific Product, or a specific Transaction).</p>
                <p style="margin-top:10px; font-size: 0.85rem; color: var(--info);"><em>Who or what are we studying?</em></p>
              </div>
              <div class="feature-box">
                <span class="feature-icon">🏷️</span>
                <h4>Attribute (Feature / Variable)</h4>
                <p>An attribute is a characteristic or property that describes an entity (e.g., Age, Location, Course, Total Spent). The terms attribute, feature, and variable are used interchangeably.</p>
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
            <p class="lead-text">The <strong>Data Science Life Cycle</strong> is a structured process that guides a data science project from start to finish. It is a roadmap that helps data scientists organize, develop, and complete a data science project effectively. It is an iterative process of research and discovery that guides data scientists in performing the tasks needed to develop and use predictive models.</p>
            
            <h3 style="margin-top: 30px;">Goals of the Data Science Project Life Cycle:</h3>
            <ul class="styled-list">
              <li>Providing a clear and organized process for the project.</li>
              <li>Improving communication between data science teams and customers.</li>
              <li>Using standardized templates and project documents (artifacts).</li>
              <li>Making procedures consistent and reducing misunderstandings and confusion.</li>
            </ul>
          </div>
        `
      },
      {
        heading: 'Phase 1: Business Requirements',
        content: `
          <div class="section-body">
            <p class="lead-text">The first and most important phase of a data science project. It focuses on clearly understanding the business problem before collecting or analyzing data. Understand the problem, define the goal, and ask the right questions before working with the data.</p>
            <div class="alert alert-info">
              <div class="alert-icon">🔍</div>
              <div class="alert-content">
                <strong>Golden Rule</strong>
                <p>"Know the problem before solving it." Ask "Why?" repeatedly to uncover the real issue before ever touching the data.</p>
              </div>
            </div>
            
            <h3 style="margin-top: 30px;">Key Activities:</h3>
            <ul class="styled-list">
              <li>Understand the business problem</li>
              <li>Identify the central objectives of the project</li>
              <li>Identify the variables that need to be predicted</li>
              <li>Collaborate with stakeholders and ask "Why?"</li>
              <li>Formulate the questions that data science needs to answer</li>
            </ul>

            <h3 style="margin-top: 30px;">Important Activities:</h3>
            <ul class="styled-list">
              <li><strong>Identify Key Variables:</strong> Determine which specific variables will be the targets of the predictive model.</li>
              <li><strong>Identify Data Sources:</strong> Determine where the necessary data will come from.</li>
            </ul>
            
            <h3 style="margin-top: 30px;">Phase 1 Deliverables:</h3>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number" style="background: var(--info);">1</div>
                <div class="step-content">
                  <h4>Charter Document</h4>
                  <p>A living document that gets updated throughout the project, as new data or requirements arise.</p>
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
        heading: 'Phase 2: Data Acquisition & Understanding',
        content: `
          <div class="section-body">
            <p class="lead-text">Once we have defined the business and its objectives, we need to understand the data and all the different needs. This phase involves <strong>Data Ingestion</strong>—setting up the process of moving data from its source locations to the target locations where you run analytics operations.</p>
            
            <h3>Key Concepts of Data Ingestion:</h3>
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

            <h3 style="margin-top: 30px;">The ETL 3-Step Process:</h3>
            <div class="step-list">
              <div class="step-item">
                <div class="step-number">E</div>
                <div class="step-content">
                  <h4>Extracting</h4>
                  <p>Extracting data from single or multiple data sources. Pulling raw data from multiple sources (databases, APIs, Excel, CSVs, Web Scraping).</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">T</div>
                <div class="step-content">
                  <h4>Transforming</h4>
                  <p>Transforming data as per business logic. It is in itself a two-step process—data cleansing and data manipulation. Cleaning, formatting, and structuring data to make it usable.</p>
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
            
            <p style="margin-top:20px;">After ingestion, data scientists <strong>explore and audit the data</strong> to verify its quality using summarization and visualization utilities.</p>

            <h3 style="margin-top: 30px;">Phase 2 Deliverables:</h3>
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
                  <h4>Checkpoint Decision</h4>
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
    title: 'Phases 3 & 4',
    sections: [
      {
        heading: 'Phase 3: Data Modeling',
        content: `
          <div class="section-banner" style="background-image: url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80');">
            <h2>Analytical Precision</h2>
          </div>
          <div class="section-body">
            <p class="lead-text"><strong>Data Modeling</strong> is where you transform your understanding of the data into a structured design that defines how information will be organized, processed, and analyzed. This is where analytical thinking meets mathematical precision.</p>
            
            <h3>Key Focus Areas of Data Modeling:</h3>
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

            <h3 style="margin-top: 30px;">Phase 3 Deliverables:</h3>
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
        heading: 'Feature Engineering',
        content: `
          <div class="section-body">
            <p class="lead-text"><strong>Feature Engineering</strong> is one of the most critical tasks in the data preparation stage of a machine learning project. It's the art and science of transforming raw data into meaningful inputs called features that help models learn patterns effectively. It involves creating, modifying, and selecting variables (features) that best represent the underlying problem.</p>
            
            <h3>Key Activities of Feature Engineering:</h3>
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

            <h3 style="margin-top: 30px;">Data Transformation and Outlier Handling:</h3>
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
                <p>Standardizes feature ranges for uniformity. Includes Min-max scaling or standardization (z-score).</p>
              </div>
            </div>

            <h3 style="margin-top: 30px;">Dealing With Data Issues:</h3>
            <ul class="styled-list">
              <li><strong>Skewed Data:</strong> Adjust distributions using log or power transforms to achieve symmetry.</li>
              <li><strong>Bias Mitigation:</strong> Ensures data doesn't favor one group or outcome unfairly.</li>
              <li><strong>Binning:</strong> Groups continuous values into discrete intervals for easier interpretation.</li>
              <li><strong>Outlier Detection:</strong> Identifies data points that deviate from normal patterns.</li>
            </ul>

            <div class="alert alert-warning" style="margin-top: 20px;">
              <div class="alert-icon">⚠️</div>
              <div class="alert-content">
                <strong>About Outliers</strong>
                <p>Outliers may signal technical glitches or critical incidents and must be treated carefully to avoid distorting model results.</p>
              </div>
            </div>

            <h3 style="margin-top: 30px;">Common Outlier Treatment Methods:</h3>
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
            <p class="lead-text">Feature Selection is the process of identifying which variables are most useful for your model. There are three main approaches.</p>
            
            <h3>1. Filter-Based Method</h3>
            <p>Features are selected based on statistical metrics without involving a predictive model. Quick, simple, and works well for high-dimensional datasets.</p>
            <h4 style="margin-top: 15px;">Filter-Based Method Examples:</h4>
            <ul class="styled-list">
              <li><strong>Correlation:</strong> Removes features highly correlated with each other.</li>
              <li><strong>Chi-square Test:</strong> Measures dependence between categorical variables.</li>
              <li><strong>ANOVA (Analysis of Variance):</strong> Tests whether different groups have significantly different means.</li>
            </ul>

            <h3 style="margin-top: 30px;">2. Wrapper-Based Method</h3>
            <p>More accurate but computationally expensive. Treats feature selection as a search problem, evaluating subsets of features by training models and checking performance.</p>
            <h4 style="margin-top: 15px;">Wrapper-Based Method Examples:</h4>
            <ul class="styled-list">
              <li><strong>Recursive Feature Elimination (RFE):</strong> Iteratively removes the least important features.</li>
              <li><strong>Forward Selection:</strong> Starts with no features, adds them one by one based on performance.</li>
              <li><strong>Backward Selection:</strong> Starts with all features, removes them step by step.</li>
            </ul>

            <h3 style="margin-top: 30px;">3. Embedded Method</h3>
            <p>Efficient and integrated into model training. Uses algorithms that have built-in feature selection during training.</p>
            <h4 style="margin-top: 15px;">Embedded Method Examples:</h4>
            <ul class="styled-list">
              <li><strong>LASSO (L1 Regularization):</strong> Shrinks coefficients, eliminating less important features.</li>
              <li><strong>Ridge (L2 Regularization):</strong> Reduces coefficient size but keeps all features, controlling overfitting.</li>
            </ul>
          </div>
        `
      },
      {
        heading: 'Phase 4: Deployment',
        content: `
          <div class="section-body">
            <p class="lead-text"><strong>Deployment</strong> is the final step in the data science or machine learning project lifecycle. It's where your model moves from the development environment into a production or production-like environment so that real users can interact with it and validate its performance.</p>
            
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
              <li><strong>User Acceptance Testing (UAT):</strong> End-users validate the model's performance. Inaccuracies are fixed before full release.</li>
              <li><strong>API Exposure:</strong> The model is exposed through an open API interface, allowing integration with Websites, Dashboards, Spreadsheets, and Backend applications.</li>
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
                    <td><strong>Data</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>A collection of facts, observations, or information about something in the real world.</td>
                  </tr>
                  <tr>
                    <td><strong>Big Data</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Extremely large and complex amounts of data that are difficult to collect, store, manage, and analyze using traditional RDBMS.</td>
                  </tr>
                  <tr>
                    <td><strong>The 4 V's</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Volume (how much), Velocity (what speed), Variety (what formats), Veracity (how accurate).</td>
                  </tr>
                  <tr>
                    <td><strong>Structured Data</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Data easily analyzed and organized into the database; stored in tables with the same structure (i.e., set of attributes). Benefits: Ease of Use, Scalability, Analytics.</td>
                  </tr>
                  <tr>
                    <td><strong>Unstructured Data</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Data that does not follow a fixed or organized format, such as rows and columns in a traditional database. (e.g., text documents, video, audio, email).</td>
                  </tr>
                  <tr>
                    <td><strong>Data Mining</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>The process of examining large amounts of raw data to discover useful information, patterns, relationships, or trends.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Science</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>The study of data to discover useful information, patterns, and insights that can help us understand a situation and make better decisions.</td>
                  </tr>
                  <tr>
                    <td><strong>Statistics</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Helps us analyze numbers and determine patterns or trends.</td>
                  </tr>
                  <tr>
                    <td><strong>Mathematics</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Provides formulas and methods for analyzing data.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Analysis</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Involves examining data to find meaningful information.</td>
                  </tr>
                  <tr>
                    <td><strong>Machine Learning</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Allows computers to learn patterns from data and make predictions.</td>
                  </tr>
                  <tr>
                    <td><strong>Domain Knowledge</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Deep understanding of a specific industry or field—such as healthcare, finance, or retail—including its rules, processes, and unique language.</td>
                  </tr>
                  <tr>
                    <td><strong>Customer Segmentation</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Dividing customers into groups based on similar characteristics, behaviors, or preferences.</td>
                  </tr>
                  <tr>
                    <td><strong>Clustering</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>In Data Science and Machine Learning, this type of grouping is commonly called clustering.</td>
                  </tr>
                  <tr>
                    <td><strong>Association-Rule Mining</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Data science technique used to discover relationships between items that frequently occur together.</td>
                  </tr>
                  <tr>
                    <td><strong>Actionable Insight</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>A finding from data that gives us enough useful information to decide what action should be taken.</td>
                  </tr>
                  <tr>
                    <td><strong>Entity</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>The real-world person, object, or event that we are interested in studying.</td>
                  </tr>
                  <tr>
                    <td><strong>Attribute / Feature</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>An attribute is a characteristic or property that describes an entity.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Set</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>A collection of related data organized together.</td>
                  </tr>
                  <tr>
                    <td><strong>Analytics Record</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>A well-organized collection of data prepared for analysis. The consolidated, cleaned master table.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Sources</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Where all the data in an organization are generated.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Storage</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Where the data are stored and processed.</td>
                  </tr>
                  <tr>
                    <td><strong>Applications</strong></td>
                    <td><span class="tag" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">Chapter 1</span></td>
                    <td>Where the data are shared with consumers of these data.</td>
                  </tr>

                  <!-- Chapter 2 Terms -->
                  <tr>
                    <td><strong>Data Science Life Cycle</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>A structured process that guides a data science project from start to finish. An iterative process of research and discovery.</td>
                  </tr>
                  <tr>
                    <td><strong>Business Requirements</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>The first and most important phase. Focuses on clearly understanding the business problem before collecting or analyzing data.</td>
                  </tr>
                  <tr>
                    <td><strong>Charter Document</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>A living document that gets updated throughout the project, as new data or requirements arise.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Sources (Deliverable)</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>A document which specifies the original and destination locations of the raw data.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Dictionaries</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Provide descriptions of the data supplied by the client including information about the schema and entity-relation diagrams.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Ingestion</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Setting up the process of moving data from its source locations to the target locations where you run analytics operations.</td>
                  </tr>
                  <tr>
                    <td><strong>Source Locations</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>The origins of your data, such as databases, APIs, sensors, or files.</td>
                  </tr>
                  <tr>
                    <td><strong>Target Locations</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Destinations like data warehouses, data lakes, or analytics platforms where you perform operations and reporting.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Pipeline</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>The automated system that extracts, transforms, and loads (ETL) data from source to target.</td>
                  </tr>
                  <tr>
                    <td><strong>ETL Pipeline</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Extract (pull from single or multiple sources), Transform (cleanse and manipulate data), Load (transfer to target environment).</td>
                  </tr>
                  <tr>
                    <td><strong>Data Quality Report</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Includes data summaries, the relationship between attribute and target, variable ranking, etc.</td>
                  </tr>
                  <tr>
                    <td><strong>Solution Architecture</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Can be in the form of a diagram/description of your data pipeline.</td>
                  </tr>
                  <tr>
                    <td><strong>Checkpoint Decision</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Used to determine if the value expected is sufficient to continue its pursuit.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Modeling</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Transforming your understanding of the data into a structured design that defines how information will be organized, processed, and analyzed.</td>
                  </tr>
                  <tr>
                    <td><strong>Model Design</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Defining the mathematical or statistical approach that best fits your goals (e.g., regression, classification, clustering).</td>
                  </tr>
                  <tr>
                    <td><strong>Data Model Diagram</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Visual representation of entities, relationships, and data flow.</td>
                  </tr>
                  <tr>
                    <td><strong>Model Specification Document</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Defines algorithms, parameters, and expected outputs.</td>
                  </tr>
                  <tr>
                    <td><strong>Validation Report</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Shows how the model performs against test data and metrics.</td>
                  </tr>
                  <tr>
                    <td><strong>Feature Engineering</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>The art and science of transforming raw data into meaningful inputs (features) that help models learn patterns effectively.</td>
                  </tr>
                  <tr>
                    <td><strong>Inclusion & Aggregation</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Combining raw variables or summarizing data to form new, informative features.</td>
                  </tr>
                  <tr>
                    <td><strong>Feature Selection</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Identifying which variables are most useful and discarding those that add noise or redundancy.</td>
                  </tr>
                  <tr>
                    <td><strong>Log Transform</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Reduces skewness and compresses large values. Useful for income or population data.</td>
                  </tr>
                  <tr>
                    <td><strong>Square-root Transformation</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Stabilizes variance and reduces impact of outliers. Applied to count data (e.g., number of clicks).</td>
                  </tr>
                  <tr>
                    <td><strong>Categorical Encoding</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Converts non-numeric data into numeric form. One-hot or label encoding for categorical variables.</td>
                  </tr>
                  <tr>
                    <td><strong>Power Functions</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Adjusts data distribution using exponents. Helps normalize data for linear models.</td>
                  </tr>
                  <tr>
                    <td><strong>Scaling</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Standardizes feature ranges for uniformity. Min-max scaling or standardization (z-score).</td>
                  </tr>
                  <tr>
                    <td><strong>Binning</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Groups continuous values into discrete intervals for easier interpretation.</td>
                  </tr>
                  <tr>
                    <td><strong>Outlier Detection</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Identifies data points that deviate from normal patterns. May signal technical glitches or critical incidents.</td>
                  </tr>
                  <tr>
                    <td><strong>Trimming</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Removes extreme values beyond a defined threshold (e.g., top and bottom 1%).</td>
                  </tr>
                  <tr>
                    <td><strong>Winsorizing</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Replaces extreme values with the nearest acceptable boundary (e.g., cap at 95th percentile).</td>
                  </tr>
                  <tr>
                    <td><strong>Imputation</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Substitutes outlier values with estimated ones (mean, median, or model-based).</td>
                  </tr>
                  <tr>
                    <td><strong>Segmentation (Outlier)</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Separates outliers into a different group for specialized analysis (e.g., fraud detection).</td>
                  </tr>
                  <tr>
                    <td><strong>Filter-Based Method</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Features selected based on statistical metrics without a predictive model. Examples: Correlation, Chi-square Test, ANOVA.</td>
                  </tr>
                  <tr>
                    <td><strong>Wrapper-Based Method</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>More accurate but computationally expensive. Examples: RFE, Forward Selection, Backward Selection.</td>
                  </tr>
                  <tr>
                    <td><strong>Embedded Method</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Efficient, integrated into model training. Examples: LASSO (L1 Regularization), Ridge (L2 Regularization).</td>
                  </tr>
                  <tr>
                    <td><strong>LASSO (L1)</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Shrinks coefficients, eliminating less important features.</td>
                  </tr>
                  <tr>
                    <td><strong>Ridge (L2)</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Reduces coefficient size but keeps all features, controlling overfitting.</td>
                  </tr>
                  <tr>
                    <td><strong>Deployment</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>The final step where your model moves from development into production so real users can interact with it.</td>
                  </tr>
                  <tr>
                    <td><strong>Operationalization</strong></td>
                    <td><span class="tag" style="background: rgba(16,185,129,0.1); color: var(--success);">Chapter 2</span></td>
                    <td>Making the model usable/accessible for end-users via APIs or dashboards.</td>
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
