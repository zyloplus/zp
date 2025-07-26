
export type User = {
  id: string;
  username: string;
  avatar: string;
  isVerified: boolean;
  gender: 'male' | 'female';
  coins: number;
};

export type Comment = {
  id: string;
  text: string;
  user: User;
  timestamp: string;
};

export type Post = {
  id: string;
  user: User;
  image: string;
  imageHint: string;
  caption: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
};

export type Note = {
  id: string;
  user: User;
  text: string;
  timestamp: string;
};

export type Story = {
  id: string;
  user: User;
  type: 'live' | 'recent';
};

export type Transaction = {
    id: string;
    type: 'earn' | 'spend';
    description: string;
    amount: number;
    timestamp: string;
};


export const users: User[] = [
  { id: 'u1', username: 'naturelover', avatar: 'https://placehold.co/100x100.png', isVerified: true, gender: 'female', coins: 520 },
  { id: 'u2', username: 'travelbug', avatar: 'https://placehold.co/100x100.png', isVerified: false, gender: 'male', coins: 120 },
  { id: 'u3', username: 'foodie_queen', avatar: 'https://placehold.co/100x100.png', isVerified: true, gender: 'female', coins: 2400 },
  { id: 'u4', username: 'cityscape_pro', avatar: 'https://placehold.co/100x100.png', isVerified: false, gender: 'male', coins: 85 },
  { id: 'u5', username: 'zylon_user', avatar: 'https://placehold.co/100x100.png', isVerified: false, gender: 'male', coins: 1150 },
];

export const stories: Story[] = [
  { id: 's1', user: users[1], type: 'live' },
  { id: 's2', user: users[0], type: 'recent' },
  { id: 's3', user: users[2], type: 'recent' },
  { id: 's4', user: users[3], type: 'recent' },
];

export const notes: Note[] = [
  { id: 'n1', user: users[0], text: 'Feeling creative today! 🎨', timestamp: '1h ago' },
  { id: 'n2', user: users[1], text: 'On a new adventure. ✈️', timestamp: '3h ago' },
  { id: 'n3', user: users[2], text: 'What should I cook tonight?', timestamp: '5h ago' },
  { id: 'n4', user: users[3], text: 'City vibes only. 🌃', timestamp: 'Just now' },
];

export const posts: Post[] = [
  {
    id: 'p1',
    user: users[0],
    image: 'https://placehold.co/600x600.png',
    imageHint: 'forest mountains',
    caption: 'Lost in the beauty of the serene forest. Every leaf tells a story. 🌲✨ #nature #peaceful',
    likes: 1245,
    comments: [
      { id: 'c1', text: 'Absolutely breathtaking!', user: users[1], timestamp: '2h ago' },
      { id: 'c2', text: 'I need to go there! Where is this?', user: users[2], timestamp: '1h ago' },
    ],
    timestamp: '4h ago',
  },
  {
    id: 'p2',
    user: users[3],
    image: 'https://placehold.co/600x750.png',
    imageHint: 'city skyscraper',
    caption: 'The city that never sleeps. Capturing the urban jungle from above. 🏙️ #citylife #skyline',
    likes: 892,
    comments: [
      { id: 'c3', text: 'Incredible shot!', user: users[0], timestamp: '3h ago' },
    ],
    timestamp: '8h ago',
  },
    {
    id: 'p3',
    user: users[2],
    image: 'https://placehold.co/600x600.png',
    imageHint: 'delicious food',
    caption: 'Brunch goals! This avocado toast was everything I dreamed of. 🥑🍳 #foodgram #brunch',
    likes: 2301,
    comments: [
      { id: 'c4', text: 'Yum! That looks amazing.', user: users[1], timestamp: '5h ago' },
      { id: 'c5', text: 'Recipe please!', user: users[4], timestamp: '4h ago' },
    ],
    timestamp: '1d ago',
  },
];

export const marketplaceListings = [
    { id: 'm1', title: 'Used Honda Civic 2018', category: 'Cars', price: 15000, location: 'New York, NY', image: 'https://placehold.co/400x300.png', imageHint: 'sedan car' },
    { id: 'm2', title: '2BHK Apartment for Rent', category: 'Property', price: 2500, location: 'San Francisco, CA', image: 'https://placehold.co/400x300.png', imageHint: 'apartment building' },
    { id: 'm3', title: 'Graphic Designer Needed', category: 'Jobs', price: 0, location: 'Austin, TX', image: 'https://placehold.co/400x300.png', imageHint: 'person laptop' },
    { id: 'm4', title: 'iPhone 13 Pro Max', category: 'Electronics', price: 800, location: 'Chicago, IL', image: 'https://placehold.co/400x300.png', imageHint: 'smartphone' },
    { id: 'm5', title: 'Vintage Leather Jacket', category: 'Fashion', price: 120, location: 'Los Angeles, CA', image: 'https://placehold.co/400x300.png', imageHint: 'leather jacket' },
    { id: 'm6', title: 'Mountain Bike - Great Condition', category: 'Bikes', price: 350, location: 'Denver, CO', image: 'https://placehold.co/400x300.png', imageHint: 'mountain bike' },
];

export const conversations = [
    {
        id: 'conv1',
        user: users[0],
        lastMessage: 'Absolutely breathtaking!',
        timestamp: '2h ago',
        unread: 2,
    },
    {
        id: 'conv2',
        user: users[1],
        lastMessage: 'Hey, are you free this weekend?',
        timestamp: '1d ago',
        unread: 0,
    },
    {
        id: 'conv3',
        user: users[2],
        lastMessage: 'I need to go there! Where is this?',
        timestamp: '1d ago',
        unread: 0,
    },
     {
        id: 'conv4',
        user: users[3],
        lastMessage: 'Can you send over the documents?',
        timestamp: '3d ago',
        unread: 0,
    },
];

export const transactions: Transaction[] = [
    { id: 't1', type: 'earn', description: 'Watched a Rewarded Ad', amount: 20, timestamp: '2h ago' },
    { id: 't2', type: 'earn', description: 'Daily Login Bonus', amount: 10, timestamp: '1d ago' },
    { id: 't3', type: 'spend', description: 'Unlocked Premium Chat with @naturelover', amount: 50, timestamp: '1d ago' },
    { id: 't4', type: 'earn', description: 'Posted a Reel', amount: 5, timestamp: '2d ago' },
    { id: 't5', type: 'spend', description: 'Boosted a Reel', amount: 100, timestamp: '3d ago' },
];
