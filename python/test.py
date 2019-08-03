import unittest
import math

from challenge import challenge

challenge = challenge()

class TestFunctions(unittest.TestCase):
    def test_checkFiles(self):
        result = challenge.checkFiles("data", ".js", "TODO")
        # print("result1", result)
        self.assertEqual(len(result), 6)

    def test_checkFiles_searchTerm(self):
        challenge.clearFiles()

        result = challenge.checkFiles("data", ".js", "123")
        # print("result2", result)
        self.assertEqual(len(result), 0)

    def test_checkFiles_extension(self):
        challenge.clearFiles()

        result = challenge.checkFiles("data", ".py", "TODO")
        # print("result3", result)
        self.assertEqual(len(result), 0)

if __name__ == '__main__':
    # unittest.main()
    suite = unittest.TestLoader().loadTestsFromTestCase(TestFunctions)
    unittest.TextTestRunner(verbosity=2).run(suite)
