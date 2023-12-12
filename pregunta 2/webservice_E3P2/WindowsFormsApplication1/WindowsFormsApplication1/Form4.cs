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
    public partial class Form4 : Form
    {
        String nombre = "", apepaterno = "", apematerno = "", ci = "", nota = "";

        public Form4(String xci, String xnombre, String xpaterno, String xmaterno, String xnota)
        {
            InitializeComponent();

            ci = xci;
            nombre = xnombre;
            apepaterno = xpaterno;
            apematerno = xmaterno;
            nota = xnota;
        }

        private void Form4_Load(object sender, EventArgs e)
        {
            textBox1.Text = ci;
            textBox2.Text = nombre;
            textBox3.Text = apepaterno;
            textBox4.Text = apematerno;
            textBox5.Text = nota;

        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            nombre = textBox2.Text.ToString();
            apepaterno = textBox3.Text.ToString();
            apematerno = textBox4.Text.ToString();
            nota = textBox5.Text.ToString();

            ServiceReference1.WebServiceSoapClient ws = new ServiceReference1.WebServiceSoapClient();
            ws.updateAlumno(ci, nombre, apepaterno, apematerno, nota);
            this.Close();
        }
    }
}
