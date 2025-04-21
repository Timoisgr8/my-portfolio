export default function PythonLibrary() {
  return (
    <div className="prose max-w-none">
      <h4 className="text-xl font-bold mb-2">

        🧮 TT-probability-package — A Lightweight Python Probability Toolkit&nbsp;|&nbsp;
        <a className="link" href="https://github.com/Timoisgr8/TT_probability_package" target="_blank" rel="noopener noreferrer">Github</a>|&nbsp;
        <a className="link" href="https://pypi.org/project/tt-probability-package/" target="_blank" rel="noopener noreferrer">PyPi</a>
      </h4>
      <p>
        The <code className="bg-neutral p-1 rounded-md inline-block">TT-probability-package</code> provides modular tools for simulating and analysing probabilistic systems such as coins, dice, and card decks.
        It's designed to support teaching, experimentation, and lightweight simulation of random processes.
      </p>

      <h5 className="mt-4 font-semibold">🔧 Core Features</h5>
      <ul>
        <li><strong>Coin, Dice, and CardDeck classes</strong> for simple random mechanics with customisation support.</li>
        <li><strong>GameSimulation module</strong> to run and visualise outcomes from repeated simulations using live plots.</li>
        <li><strong>Analyser module</strong> for result analysis, including regex-based pattern detection, frequency counting, and sequence detection.</li>
      </ul>

      <h5 className="mt-4 font-semibold">🚀 Example Use Case</h5>
      <pre className="bg-base-200 p-2 rounded-box overflow-auto text-sm">
        <code className="bg-neutral p-1 rounded-md block">{`
from TT_probability_package.game_simulation_module import GameSimulation
from TT_probability_package.coin_module import Coin

def result_func():
    coin_1 = Coin(head_p=0.7)
    coin_2 = Coin()
    return [coin_1.flip() == "H", coin_2.flip() == "H"]

game_simulation = GameSimulation(result_func, variable_names=['coin_1', 'coin_2'])
game_simulation.run()
        `.trim()}</code>
      </pre>

      <h5 className="mt-4 font-semibold">📦 Installation</h5>
      <pre className="bg-base-200 p-2 rounded-box overflow-auto text-sm">
        <code className="bg-neutral p-1 rounded-md block">pip install TT-probability-package</code>
      </pre>

      <p>
        This package is ideal for teaching probability, running lightweight simulations, and exploring concepts interactively.
      </p>
    </div>
  );
}
