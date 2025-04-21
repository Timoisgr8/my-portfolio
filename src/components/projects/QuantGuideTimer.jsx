export default function QuantGuideTimer() {
  return (
    <div className="prose max-w-none">
      <h4 className="text-xl font-bold mb-2">
        ⏰ QuantGuide Timer — Timer Extension for QuantGuide Questions&nbsp;|&nbsp;
        <a className="link" href="https://github.com/Timoisgr8/QuantGuide-Timer-extension" target="_blank" rel="noopener noreferrer">Github</a>
      </h4>



      <p>
        The <code className="bg-neutral p-1 rounded-md inline-block">QuantGuideTimer</code> is a browser extension designed to enhance your learning experience on the QuantGuide platform.
        It automatically adds a timer to each question page, allowing you to track your time and challenge yourself to solve problems more efficiently.
        This extension is particularly useful for timed practice sessions and for keeping track of how long you spend on each question.
      </p>

      <h5 className="mt-4 font-semibold">⚙️ Instructions for Use</h5>
      <ol>
        <li>Download this <a className="link" href="https://github.com/Timoisgr8/QuantGuide-Timer-extension" target="_blank" rel="noopener noreferrer">repository</a> as a folder.</li>
        <li>Go into your browser and navigate to the "Manage Extensions" page.</li>
        <li>Enable "Developer Mode" in the extensions settings.</li>
        <li>Click "Load Unpacked" and navigate to where you placed the folder, then open it.</li>
        <li>There should now be a "QuantGuide Timer" extension installed and ready for use.</li>
        <li>Now, whenever you open a question on QuantGuide (e.g., <a className="link" href="https://www.quantguide.io/questions/poker-hands-i" target="_blank" rel="noopener noreferrer">Poker Hands 1</a>), a 1:30 timer will appear on the page.</li>
      </ol>

      <h5 className="mt-4 font-semibold">📝 To Do List</h5>
      <ul>
        <li>- Fix issue where multiple timers may appear on the same page.</li>
        <li>- Make the timer length customisable, allowing users to set their preferred time limits.</li>
      </ul>

      <br></br>

      <p>
        This extension is designed to improve my performance under time constraint during practice sessions.
      </p>
    </div>
  );
}