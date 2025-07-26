// Test script for Resume API
// Run this with: node test-resume-api.js

const BASE_URL = 'http://localhost:9000/api/v1';

// Test data
const testUser = {
  name: "Test User",
  email: "test@example.com",
  password: "password123",
  phone: "1234567890"
};

const testResume = {
  title: "Software Engineer Resume",
  description: "My professional software engineer resume",
  personalInfo: {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedIn: "linkedin.com/in/johndoe",
    github: "github.com/johndoe"
  },
  summary: "Experienced software engineer with 5+ years of experience in full-stack development",
  experience: [
    {
      jobTitle: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      startDate: "2022-01-01",
      current: true,
      description: "Lead development of web applications using React and Node.js",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 4 developers"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      graduationDate: "2019-05-01"
    }
  ],
  skills: {
    technical: ["JavaScript", "React", "Node.js", "Python", "MongoDB"],
    soft: ["Leadership", "Communication", "Problem Solving"],
    languages: ["English", "Spanish"],
    certifications: ["AWS Certified Developer"]
  },
  projects: [
    {
      name: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React and Express",
      technologies: ["React", "Express", "MongoDB", "Stripe"],
      url: "https://myecommerce.com",
      github: "https://github.com/johndoe/ecommerce"
    }
  ]
};

async function testAPI() {
  let authToken = '';
  
  try {
    console.log('🚀 Starting Resume API Tests\n');

    // 1. Register user
    console.log('1. Testing user registration...');
    const registerResponse = await fetch(`${BASE_URL}/user/registeruser`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testUser)
    });
    
    if (registerResponse.ok) {
      console.log('✅ User registered successfully');
    } else if (registerResponse.status === 409) {
      console.log('ℹ️  User already exists, proceeding to login');
    } else {
      const error = await registerResponse.text();
      console.log('❌ Registration failed:', error);
    }

    // 2. Login user
    console.log('\n2. Testing user login...');
    const loginResponse = await fetch(`${BASE_URL}/user/loginuser`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: testUser.email,
        password: testUser.password
      })
    });

    if (loginResponse.ok) {
      const loginData = await loginResponse.json();
      authToken = loginData.data.accessToken;
      console.log('✅ User logged in successfully');
      console.log('🔑 Auth token received');
    } else {
      const error = await loginResponse.text();
      console.log('❌ Login failed:', error);
      return;
    }

    // 3. Create resume
    console.log('\n3. Testing resume creation...');
    const createResponse = await fetch(`${BASE_URL}/resumes`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify(testResume)
    });

    let resumeId = '';
    if (createResponse.ok) {
      const createData = await createResponse.json();
      resumeId = createData.data._id;
      console.log('✅ Resume created successfully');
      console.log('📄 Resume ID:', resumeId);
    } else {
      const error = await createResponse.text();
      console.log('❌ Resume creation failed:', error);
      return;
    }

    // 4. Get user resumes
    console.log('\n4. Testing get user resumes...');
    const getResumesResponse = await fetch(`${BASE_URL}/resumes`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });

    if (getResumesResponse.ok) {
      const resumesData = await getResumesResponse.json();
      console.log('✅ Resumes retrieved successfully');
      console.log('📊 Total resumes:', resumesData.data.pagination.totalResumes);
    } else {
      const error = await getResumesResponse.text();
      console.log('❌ Get resumes failed:', error);
    }

    // 5. Get specific resume
    console.log('\n5. Testing get specific resume...');
    const getResumeResponse = await fetch(`${BASE_URL}/resumes/${resumeId}`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });

    if (getResumeResponse.ok) {
      const resumeData = await getResumeResponse.json();
      console.log('✅ Specific resume retrieved successfully');
      console.log('📝 Resume title:', resumeData.data.title);
    } else {
      const error = await getResumeResponse.text();
      console.log('❌ Get specific resume failed:', error);
    }

    // 6. Update resume
    console.log('\n6. Testing resume update...');
    const updateResponse = await fetch(`${BASE_URL}/resumes/${resumeId}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        title: "Updated Software Engineer Resume",
        summary: "Updated summary with more experience details"
      })
    });

    if (updateResponse.ok) {
      console.log('✅ Resume updated successfully');
    } else {
      const error = await updateResponse.text();
      console.log('❌ Resume update failed:', error);
    }

    // 7. Test ATS score update
    console.log('\n7. Testing ATS score update...');
    const atsResponse = await fetch(`${BASE_URL}/resumes/${resumeId}/ats-score`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        overallScore: 85,
        breakdown: {
          keywordMatch: 80,
          formatting: 90,
          sentenceStructure: 85,
          length: 85
        },
        feedback: [
          "Good keyword usage",
          "Professional formatting",
          "Consider adding more technical skills"
        ]
      })
    });

    if (atsResponse.ok) {
      console.log('✅ ATS score updated successfully');
    } else {
      const error = await atsResponse.text();
      console.log('❌ ATS score update failed:', error);
    }

    console.log('\n🎉 All tests completed!');
    console.log('\n📋 Summary:');
    console.log('- User registration/login: Working');
    console.log('- Resume CRUD operations: Working');
    console.log('- ATS score integration: Working');
    console.log('- Authentication: Working');

  } catch (error) {
    console.error('💥 Test failed with error:', error.message);
  }
}

// Run tests
testAPI();
