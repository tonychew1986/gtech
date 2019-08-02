import unittest
import math

from challenge import challenge

challenge = challenge()

class TestFunctions(unittest.TestCase):
    def test_checkFiles(self):
        path = "data"
        searchTerm = 'TODO'

        result = challenge.checkFiles(path, searchTerm)
        self.assertEqual(len(result), 6)

if __name__ == '__main__':
    # unittest.main()
    suite = unittest.TestLoader().loadTestsFromTestCase(TestFunctions)
    unittest.TextTestRunner(verbosity=2).run(suite)
