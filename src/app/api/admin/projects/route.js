import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src', 'app', 'utility', 'projectsData.json');
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'projects');

export async function POST(request) {
  // Block in production — return 404 so the route is invisible when deployed
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 });
  }

  try {
    const formData = await request.formData();

    const title = formData.get('title');
    const category = formData.get('category');
    const status = formData.get('status');
    const desc = formData.get('desc');
    const techStack = formData.get('techStack');
    const liveLink = formData.get('liveLink') || '#';
    const frontend = formData.get('frontend') || '#';
    const backend = formData.get('backend') || '#';
    const screenshot = formData.get('screenshot');

    if (!title || !desc || !screenshot) {
      return NextResponse.json(
        { error: 'Title, description, and screenshot are required.' },
        { status: 400 }
      );
    }

    // Ensure upload directory exists
    await fs.mkdir(UPLOAD_DIR, { recursive: true });

    // Save image file
    const ext = path.extname(screenshot.name) || '.png';
    const safeTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    const filename = `${safeTitle}-${Date.now()}${ext}`;
    const filepath = path.join(UPLOAD_DIR, filename);

    const bytes = await screenshot.arrayBuffer();
    await fs.writeFile(filepath, Buffer.from(bytes));

    // Build the new project object
    const tags = techStack
      ? techStack.split(',').map((t) => t.trim()).filter(Boolean)
      : [];

    const rawData = await fs.readFile(DATA_FILE, 'utf-8');
    const projects = JSON.parse(rawData);

    const maxId = projects.reduce((max, p) => Math.max(max, p.id || 0), 0);

    const newProject = {
      id: maxId + 1,
      titel: title,
      desc,
      src: `/projects/${filename}`,
      category: category || 'Full Stack',
      tags,
      frontend,
      backend,
      liveView: liveLink,
      status: status || 'Completed',
      storyHeadline: '',
      storySubheadline: '',
      overview: desc,
      storyGallery: [],
      keyFeatures: [],
      challenges: [],
      liveLink: liveLink,
      githubLink: frontend,
      createdAt: new Date().toISOString(),
    };

    // Prepend so it appears first (newest)
    projects.unshift(newProject);

    await fs.writeFile(DATA_FILE, JSON.stringify(projects, null, 2), 'utf-8');

    return NextResponse.json({ success: true, project: newProject });
  } catch (err) {
    console.error('Admin project creation error:', err);
    return NextResponse.json(
      { error: 'Failed to save project.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 });
  }
  return NextResponse.json({ status: 'Admin API active (dev only)' });
}
