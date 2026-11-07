function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>

      <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">Page not found</p>

      <p className="mt-1 text-muted">
        The page you're looking for doesn't exist.
      </p>
    </div>
  );
}

export default NotFound;
