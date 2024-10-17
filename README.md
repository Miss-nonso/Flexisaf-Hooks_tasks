### Project: Infinite Scrolling News App

This project is a **React-based Infinite Scrolling News App** that fetches and displays news articles related to Bitcoin using the [News API](https://newsapi.org/). The app dynamically loads news as the user scrolls down, providing an infinite scrolling experience without the need for pagination buttons. The key features of the app include fetching data from a public API, displaying articles in a responsive and aesthetically pleasing layout, and implementing infinite scroll to load more articles seamlessly.

### Hooks Used in the Project

1. **useState**:
   - **State Management**: We used `useState` to manage the state of the fetched news articles, the current page number for pagination, loading status, and whether there are more articles to fetch.
   - **Dynamic Updates**: The state was updated dynamically when new articles were fetched, and re-rendered the app to display the latest news on the page.

2. **useEffect**:
   - **API Call on Page Load and Scroll**: `useEffect` was utilized to handle side effects, such as fetching news articles when the component mounts and whenever the page number changes (triggered by scrolling).
   - **Real-time Loading**: This allowed the app to make API requests to fetch new data automatically, ensuring fresh content as the user scrolled down the page.

3. **useRef**:
   - **Tracking Last Article**: `useRef` was used to observe the last news item on the page. With the help of the `IntersectionObserver` API, we tracked when the last article came into view and triggered the loading of additional articles by updating the state.
   
4. **Infinite Scrolling**:
   - The combination of `useEffect`, `useRef`, and the IntersectionObserver helped create the infinite scrolling functionality, ensuring that more articles were fetched automatically as the user approached the bottom of the page.

### Summary of Implementation:
- The app starts by fetching a batch of news articles using `useEffect` and stores them in state via `useState`.
- As the user scrolls down, `useRef` and `IntersectionObserver` detect when the last article comes into view, which triggers a state update to load the next page of articles.
- The app re-renders with new articles while maintaining a smooth scrolling experience, with no interruptions or manual interaction required to load more content.

This project showcases an understanding of core React hooks, efficient state management, and building a responsive and user-friendly application using external APIs.
