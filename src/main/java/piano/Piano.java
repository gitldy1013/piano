package piano;

import javax.swing.*;
import java.applet.Applet;
import java.applet.AudioClip;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseMotionAdapter;
import java.io.File;

public class Piano extends JFrame implements ActionListener, KeyListener {
  JButton[] a = new JButton[88];

  int width = 1917;
  int height = 300;

  // 设置黑键的位置所用的数组
  int[] arr = {
    1, 4, 6, 9, 11, 13, 16, 18, 21, 23, 25, 28, 30, 33, 35, 37, 40, 42, 45, 47, 49, 52, 54, 57, 59,
    61, 64, 66, 69, 71, 73, 76, 78, 81, 83, 85
  };

  // 钢琴88键对应键盘
  int[] keys = {
    123, 123, 122, 121, 120, 119, 118, 117, 116, 115, 114, 113, 112, 8, 192, 45, 61, 91, 93, 92, 59,
    222, 10, 44, 46, 47, 32, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72,
    73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 96, 97, 98, 99, 100,
    101, 102, 103, 104, 105, 106, 107, 109, 110, 111, 37, 38, 39, 40, 155, 127, 33, 34, 36, 35
  };

  // 设置按钮的名字在KeyEvent中用到
  String[] name = {
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17",
    "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33",
    "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
    "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65",
    "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81",
    "82", "83", "84", "85", "86", "87", "88"
  };

  // 88个音存放数组
  File[] files = new File[88];
  AudioClip[] sound = new AudioClip[88];
  AudioClip chosenClip;

  // 用于处理拖动事件，表示鼠标按下时的坐标，相对于JFrame
  int xOld = 0;
  int yOld = 0;

  Piano() {
    doAction();
    // JLayeredPane用于添加两个图层的，一个用于背景，一个用于界面
    JLayeredPane layeredPane = new JLayeredPane();
    layeredPane.setBounds(0, 0, width, height);
    this.add(layeredPane);

    // 背景Panel
    JPanel bgPanel = new JPanel();
    bgPanel.setBounds(0, 0, width, height);
    bgPanel.setBackground(Color.white);
    bgPanel.setLayout(null);
    layeredPane.add(bgPanel);

    // 读取文件数组中的音乐并存在sound数组中
    for (int i = 0; i < files.length; i++) {
      String property = System.getProperty("user.dir");
      files[i] = new File(property + "/src/main/resources/piano_music/1 (" + (i + 1) + ").wav");
      try {
        sound[i] = Applet.newAudioClip(files[i].toURI().toURL());
      } catch (OutOfMemoryError e1) {
        System.out.println("内存溢出");
        e1.printStackTrace();
      } catch (Exception e1) {
        e1.printStackTrace();
      }
    }

    // 用数组将88个键模拟钢琴的位置设置
    for (int i = 0; i < a.length; i++) {
      a[i] = new JButton();
      a[i].setBounds(22 * i, 0, 25, height);
      a[i].setBackground(Color.white);
      for (int value : arr) {
        if (i == value) {
          a[i].setBackground(Color.black);
          a[i].setSize(25, 180);
        }
      }
      a[i].setName(name[i]);
      bgPanel.add(a[i]);
      // 添加事件
      a[i].addActionListener(this);
      a[i].addKeyListener(this);
    }
    // 窗口的一些基础设置
    setBounds(0, 0, width, height);
    setUndecorated(true);
    setVisible(true);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setLocationRelativeTo(null);
  }

  private void doAction() {
    // 处理拖动事件
    this.addMouseListener(
        new MouseAdapter() {
          @Override
          public void mousePressed(MouseEvent e) {
            xOld = e.getX();
            yOld = e.getY();
          }
        });
    this.addMouseMotionListener(
        new MouseMotionAdapter() {
          @Override
          public void mouseDragged(MouseEvent e) {
            int xOnScreen = e.getXOnScreen();
            int yOnScreen = e.getYOnScreen();
            int xx = xOnScreen - xOld;
            int yy = yOnScreen - yOld;
            Piano.this.setLocation(xx, yy);
          }
        });
  }

  @Override
  public void actionPerformed(ActionEvent e) { // 点击按钮播放所按的那个按钮对应的音
    for (int i = 0; i < a.length; i++) {
      if (e.getSource() == a[i]) {
        chosenClip = sound[i];
        chosenClip.play();
      }
    }
  }

  /** 用键盘对应按钮 别键盘按下的键，并对应那个按钮，触发ActionEvent */
  @Override
  public void keyPressed(KeyEvent e) {
    int key = e.getKeyCode();
    for (int i = 0; i < keys.length; i++) {
      if (key == keys[i]) {
        while (true) {
          for (String s : name) {
            if (e.getComponent().getName().equals(s)) {
              a[i].doClick();
            }
          }
          break;
        }
      }
    }
  }

  @Override
  public void keyTyped(KeyEvent e) {}

  @Override
  public void keyReleased(KeyEvent e) {}

  public static void main(String[] args) {
    new Piano();
  }
}
