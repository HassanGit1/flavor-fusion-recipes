// RootLayout.tsx
import Header from '@/components/Header';
import './globals.css';

export const metadata = {
  title: 'Flavour Fusion',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
          <Header />
        <div className="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
