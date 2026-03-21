const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 section-padding border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-[0.1em] text-muted-foreground font-light">
        <span>&copy; {year} Madison McCoy</span>
        <span>therealmadisonmccoy.com</span>
      </div>
    </footer>
  );
};

export default Footer;
