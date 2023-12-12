using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
    public partial class Form3 : Form
    {
        String xci = "";
        public Form3(String ci)
        {
            InitializeComponent();
            xci = ci;
        }

        private void Form3_Load(object sender, EventArgs e)
        {
            textBox1.Text = xci;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            ServiceReference1.WebServiceSoapClient ws = new ServiceReference1.WebServiceSoapClient();
            ws.eliminarAlumno(xci);
            this.Close();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
