from PyQt6.QtWidgets import QApplication, QMainWindow
from PyQt6.QtCore import Qt
from PyQt6.QtGui import QFontDatabase, QIcon
from components.toolbar import ToolBar
from components.browser import Browser
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Huemul Browser")
        self.setWindowIcon(QIcon("assets/brand/logo-small.svg"))

        self.setMinimumSize(350, 480)

        self.setWindowState(Qt.WindowState.WindowMaximized)

        self.setStyleSheet("""
            QMainWindow {
                background-color: #282a36;
                color: #fff;
                border: none;
            }
        """)

        self.browser = Browser(self)

        self.toolbar = ToolBar(self)
        self.addToolBar(self.toolbar)

        self.setCentralWidget(self.browser)

        self.browser.add_tab()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    QFontDatabase.addApplicationFont("assets/fonts/poppins/poppins-v19-latin-500.ttf")
    QFontDatabase.addApplicationFont("assets/fonts/poppins/poppins-v19-latin-600.ttf")
    QFontDatabase.addApplicationFont("assets/fonts/poppins/poppins-v19-latin-700.ttf")
    QFontDatabase.addApplicationFont("assets/fonts/poppins/poppins-v19-latin-regular.ttf")
    window = MainWindow()
    window.show()

    sys.exit(app.exec())
